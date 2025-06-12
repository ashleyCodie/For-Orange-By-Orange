import mongoose from "mongoose"
import recipeSchema from "./recipeSchema.js"

recipeSchema.set("toJSON", {
  transform: (doc, ret, options) => {
    ret.id = ret._id
    delete ret._id
    delete ret.__v
    return ret
  }
})

const recipeModel = mongoose.model("Recipe", recipeSchema)

export default recipeModel