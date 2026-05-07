import { useNavigate } from "react-router-dom";
import { create } from "../api/recipesApi";
import RecipeForm from "../components/RecipeForm";

const CreateRecipePage = () => {
  const[error,setError]=useState(null)
  const navigate = useNavigate();

  const handleCreate = async (formData) => {
    try {
      await create(formData);
      alert("Recipe created successfully!");
      navigate('/');
    } catch (err) {
      alert("Error creating recipe: " + err.message);
      setError(err.message)
    }
  };
 
  return (
    <div>
      <h2>Create New Recipe</h2>
      {error && <div className="error">{error}</div>}
      <RecipeForm onSubmit={handleCreate} />
    </div>
  );
};

export default CreateRecipePage;

