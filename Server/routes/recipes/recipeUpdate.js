import RecipeModel from "../../schemas/recipeModel.js"


const recipeUpdate = async (req, res) => {
    let {id} = req.params
    console.log(req.body)
    let {recipeName, recipeDescription, ingredients, cookingDirections, prepTime, cookTime, addedBy, recipePic, comments} = req.body
    console.log(recipeName, recipeDescription, ingredients, cookingDirections, prepTime, cookTime, addedBy, recipePic, comments)

    
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
            const recipe = await RecipeModel.findByIdAndUpdate({ "_id": id }, {
                recipeName, recipeDescription, ingredients, cookingDirections, prepTime, cookTime, addedBy, recipePic, comments
            })
            console.log("recipe", recipe)
            res.status(200).json({ "message": "Recipe has been Updated.", recipe: recipe, success: true })
        }
        catch (err) {
            console.log(err)
            res.status(500).send(err)
          }
    }
}

export default recipeUpdate