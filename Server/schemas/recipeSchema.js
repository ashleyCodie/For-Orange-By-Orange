import mongoose from "mongoose";

const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  recipeName: {
    type: String,
    default: "",
  },
  recipeDescription: {
    type: String,
    default: "",
  },
  ingredients: {
    type: String,
    default: "",
  },
 cookingDirections: {
    type: String,
    default: "",
  },
  prepTime: {
    type: String,
    default: "",
  },
  cookTime: {
    type: String,
    default: "",
  },
  addedBy: {
    type: String,
    default: "",
  },
  recipePic: {
    type: String,
    default: "",
  },
  comments:[{ 
    comment: String, author: String
    }]
});

export default recipeSchema;