import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getById, remove } from "../api/recipesApi";
import RecipeDetails from "../components/RecipeDetails";
const RecipeDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
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
      alert('Recipe deleted succefully!')
      navigate("/recipes");
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return (
    <div>
      <p>{error}</p>
      <Link to='/recipes'>← Back to recipes</Link>
    </div>);
  if (!recipe) return (
    <div>
      <h2>No recipe found!</h2>
      <Link to='/recipes'>← Back to recipes</Link>
    </div>
  )
  return (
    <>
      <RecipeDetails recipe={recipe} loading={loading} error={error} />
      <button onClick={handleDelete}>Delete recipe</button>
      <Link to={`/recipes/${recipe.id}/edit`}>
      <button>Edit recipe</button></Link>

    </>

  );
};

export default RecipeDetailsPage;