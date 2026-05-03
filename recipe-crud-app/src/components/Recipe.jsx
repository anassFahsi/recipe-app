import { Link } from "react-router-dom";

const Recipe = ({ recipe }) => (
  <li>
    <Link to={`/recipes/${recipe.id}`}>{recipe.name}</Link>
  </li>
);

export default Recipe;