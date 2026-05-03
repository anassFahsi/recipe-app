import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getById } from "../api/recipesApi";

const RecipeDetails = () => {
  const { id } = useParams();   
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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!recipe) return null;

  return (
    <div>
      <h2>{recipe.name}</h2>
      <img src={recipe.image} alt={recipe.name} width="200" />
      <p><strong>Ingredients:</strong> {recipe.ingredients?.join(", ")}</p>
      <p><strong>Instructions:</strong> {recipe.instructions}</p>
      <p><strong>Prep time:</strong> {recipe.prepTimeMinutes} min</p>
    </div>
  );
};

export default RecipeDetails;


