import express from "express"
import recipeCreate from "./recipeCreate.js"
import recipesGetAll from "./recipesGetAll.js"
import recipeGetOne from "./recipeGetOne.js"
import createRecipeComment from "./createRecipeComment.js"
// import recipeDelete from "./recipeDelete.js"
import recipeUpdate from "./recipeUpdate.js"



const recipeIndex = express.Router()

recipeIndex.post("/", recipeCreate)
recipeIndex.get("/", recipesGetAll)
recipeIndex.get("/detail/:id", recipeGetOne)
recipeIndex.put("/:id", recipeUpdate)
recipeIndex.put("/:id/comments", createRecipeComment)
// recipeIndex.delete("/:id", recipeDelete)


export default recipeIndex