import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getById, update } from "../api/recipesApi";
import RecipeForm from "../components/RecipeForm";

const UpdateRecipePage = () => {
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

  const handleUpdate = async (formData) => {
    try {
      await update(id, formData);
      alert("Recipe updated successfully!");
      navigate(`/recipes/${id}`);
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) return <p>Loading recipe...</p>;
  if (error) return <div className="error">{error}</div>
  if (!recipe) return <p>No recipe found.</p>;

  return (
    <div>
      <h2>Edit Recipe</h2>
      <RecipeForm initialData={recipe} onSubmit={handleUpdate} />
    </div>
  );
};

export default UpdateRecipePage;

