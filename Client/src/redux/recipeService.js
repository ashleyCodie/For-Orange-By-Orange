import axios from "axios";

const recipeService = {

  recipeList: async () => {
    return await axios.get(`${import.meta.env.VITE_NODE_SERVER_URL}/recipes`);
  },
  addRecipe: async (
    recipeName,
    recipeDescription,
    ingredients,
    cookingDirections,
    prepTime,
    cookTime,
    addedBy,
    recipePic,
    comments 
  ) => {
    return await axios.post(
      `${import.meta.env.VITE_NODE_SERVER_URL}/recipes`,
      {
        recipeName,
        recipeDescription,
        ingredients,
        cookingDirections,
        prepTime,
        cookTime,
        addedBy,
        recipePic,
        comments 
      },
      { headers: { "Content-Type": "application/json" } }
    );
  },
  getRecipe: async (id) => {
    return await axios.get(
      `${import.meta.env.VITE_NODE_SERVER_URL}/recipes/detail/${id}`,
      { headers: { "Content-Type": "application/json" } }
    );
  },

  updateRecipe: async (recipe) => {
    console.log("recipe.id, recipe",  recipe)
    return await axios.put(
      `${import.meta.env.VITE_NODE_SERVER_URL}/recipes/${recipe.id}`,
       recipe,
      { headers: { "Content-Type": "application/json" } }
    );
  },

  addComment: async (recipe) => {
    console.log("recipe.id, recipe",  recipe)
    return await axios.put(
      `${import.meta.env.VITE_NODE_SERVER_URL}/recipes/${recipe.id}/comment`,
       recipe,
      { headers: { "Content-Type": "application/json" } }
    );
  },

  deleteRecipe: async (id) => {
    return await axios.delete(
      `${import.meta.env.VITE_NODE_SERVER_URL}/recipes/${id}`,
      { headers: { "Content-Type": "application/json" } }
    );
  },
};

export default recipeService;