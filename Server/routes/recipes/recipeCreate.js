import RecipeModel from "../../schemas/recipeModel.js"



const recipeCreate = async (req, res) => {

    let { recipeName, recipeDescription, ingredients, cookingDirections, prepTime, cookTime, addedBy, recipePic, comments   } = req.body
    console.log(recipeName, recipeDescription, ingredients, cookingDirections, prepTime, cookTime, addedBy, recipePic, comments   )
    console.log(recipeName, recipeDescription, ingredients, cookingDirections, prepTime, cookTime, addedBy, recipePic, comments  )

    if (
        (!recipeName) ||
        (!recipeDescription) ||
        (!ingredients) ||
        (!cookingDirections) ||
        (!prepTime) ||
        (!cookTime) || 
        (!addedBy) 
 
    ) {
        console.log("Error: Recipe parameters are not valid.")
        res.status(500).send("Error: Recipe parameters are not valid.")
    }
    else {
        try {
            const recipe = await RecipeModel.create({
                recipeName, recipeDescription, ingredients, cookingDirections, prepTime, cookTime, addedBy, recipePic, comments  
            })
            console.log("recipe", recipe)
            res.status(200).json({ "message": "Recipe has been Created.", recipe: recipe, success: true })
        }
        catch (err) {
            console.log(err)
            res.status(500).send(err)
          }
    }
}

export default recipeCreate