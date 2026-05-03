import { useEffect, useState } from "react";
import { getAll } from "../api/recipesApi";
import RecipeList from "../components/RecipeList";

const RecipesPage = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        setLoading(true);
        const data = await getAll();
        console.log(data)
        setRecipes(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchRecipes();
  }, []);

  if (loading) return <p>Loading recipes...</p>;
  if (error) return <p style={{color:"red"}}>Error: {error}</p>;

  return <RecipeList recipes={recipes} />;
};

export default RecipesPage;