import Recipe from "./Recipe";

const RecipeList = ({ recipes }) => {
  if (!recipes.length) return <p>No recipes found.</p>;

  return (
    <ul>
      {recipes.map((recipe) => (
        <Recipe key={recipe.id} recipe={recipe} />
      ))}
    </ul>
  );
};

export default RecipeList;
