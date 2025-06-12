import RecipeModel from "../../schemas/recipeModel.js";

const recipesGetAll = async (req, res) => {
  try {
    const recipes = await RecipeModel.find();
    res.status(200).json({ success: true, recipes: recipes });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

export default recipesGetAll;