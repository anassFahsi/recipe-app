const RecipeDetails = ({recipe}) => (
    <div>
      <h2>{recipe.name}</h2>
      <img src={recipe.image} alt={recipe.name} width="200" />
      <p><strong>Ingredients:</strong> {recipe.ingredients?.join(", ")}</p>
      <p><strong>Instructions:</strong> {recipe.instructions}</p>
      <p><strong>Prep time:</strong> {recipe.prepTimeMinutes} min</p>
    
    </div>
)


export default RecipeDetails;


