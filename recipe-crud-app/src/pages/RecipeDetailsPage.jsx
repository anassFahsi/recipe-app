import { useParams,useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getById,remove} from "../api/recipesApi";
import RecipeDetails from "../components/RecipeDetails";
const RecipeDetailsPage= () => {
  const { id } = useParams();
  const navigate=useNavigate();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      setLoading(true);
      try {
        const data = await getById(id);
        setRecipe(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchRecipe();
  }, [id]);

   const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this recipe?")) return;
    try {
      await remove(id);
      navigate("/recipes");
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!recipe) return null;

  return (
    <>
         <RecipeDetails recipe={recipe} loading={loading} error={error}/>
         <button onClick={handleDelete}>Delete recipe</button>
    </>
    
  );
};

export default RecipeDetailsPage;