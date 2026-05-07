import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RecipeForm = ({ initialData = null, onSubmit }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    ingredients: "",
    instructions: ""
  });

 
  useEffect(() => {
    if (initialData) {
      setFormData({
        name: initialData.name || "",
        ingredients: initialData.ingredients?.join(", ") || "",
        instructions: initialData.instructions?.join("\n") || ""
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onSubmit({
      ...formData,
     
      ingredients: formData.ingredients.split(",").map((i) => i.trim()),
     
      instructions: formData.instructions.split("\n").map((i) => i.trim())
    });
  };

  const handleCancel = () => navigate("/recipes");

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>
      <br />

      <label>
        Ingredients (separate with commas):
        <input
          type="text"
          name="ingredients"
          value={formData.ingredients}
          onChange={handleChange}
          required
        />
      </label>
      <br />

      <label>
        Instructions (one step per line):
        <textarea
          name="instructions"
          value={formData.instructions}
          onChange={handleChange}
          rows="6"
          required
        />
      </label>
      <br />

      <button type="submit">
        {initialData ? "Update Recipe" : "Create Recipe"}
      </button>
      <button type="button" onClick={handleCancel}>
        Cancel
      </button>
    </form>
  );
};

export default RecipeForm;

