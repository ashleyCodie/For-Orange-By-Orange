import RecipeModel from "../../schemas/recipeModel.js";

const recipeGetOne = async (req, res) => {
  let { id } = req.params;

  try {
    const recipe = await RecipeModel.findById(id);
    res.status(200).json(recipe);
  } catch (err) {
    console.log(err);
    res.status(500).send();
  }
};

export default recipeGetOne;