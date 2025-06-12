import { useState, useEffect } from "react";
import { Link, useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { getRecipe, updateRecipe } from "../redux/recipeSlice";

const RecipeDetails = () => {
  const [recipeForm, setRecipeForm] = useState({
    comments: [],
  });
  const { id } = useParams();
  const { recipe } = useSelector((state) => state.recipe);

  
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(getRecipe(id));
    }
  }, []);

  const addComment = () => {
    const recipeUpdate = {
      id: recipe.id,
      recipeName: recipe.recipeName,
      recipeDescription: recipe.recipeDescription,
      ingredients: recipe.ingredients,
      cookingDirections: recipe.cookingDirections,
      prepTime: recipe.prepTime,
      cookTime: recipe.cookTime,
      addedBy: recipe.addedBy,
      recipePic: recipe.recipePic,
      comments: recipeForm.comments
      
    
    };
    console.log("recipeUpdate", recipeUpdate)
    console.log("recipeForm", recipeForm)
    dispatch(updateRecipe(recipeUpdate));
  };

  return (
    <div className="h-scroll p-10">
      <p className="text-center mt-25 text-orange-500 underline text-4xl font-bold">
        <span className="flex flex-start text-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-arrow-left-short mt-1"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"
            />
          </svg>
          <Link to="/recipes">Back</Link>
        </span>
      </p>
      <div className="grid grid-cols-2">
        <div className="mt-5 text-orange-500 bg-white border-2 p-5">
          <h1 className="text-5xl text-center text-blue-700">{recipe.recipeName}</h1>
          <p className="text-orange-500 text-center p-2">
            <span className="text-blue-700">Prep Time:</span> {recipe.prepTime}{" "}
            <span className="text-blue-700 ml-10">Cook Time:</span>{" "}
            {recipe.cookTime}
          </p>
          <p className="text-xl">
            <span className="text-blue-700 text-2xl">Description:</span>{" "}
            {recipe.recipeDescription}
          </p>
          <p className="text-xl">
            <span className="text-blue-700">Ingredients:</span>{" "}
            {recipe.ingredients}
          </p>
          <p className="text-xl">
            <span className="text-blue-700">Cooking Directions:</span>{" "}
            {recipe.cookingDirections}
          </p>

          <img
            className="object-cover  rounded-lg h-96 w-96 ml-60 "
            src={
              new URL(`../assets/images/${recipe.recipePic}`, import.meta.url)
                .href
            }
            alt=""
          />
          <p className="text-xl text-center mt-2">
            <span className="text-blue-700">Added By:</span>{" "}
            <span className="hover:text-blue-700">{recipe.addedBy}</span>
          </p>
        </div>
        <div className="ml-2 mt-5 text-orange-500 border-2 p-5 ">
          <h1 className="text-5xl text-center">Member Comments</h1>
          <div className=" grid grid-cols-3 ml-10">
            <div className="ml-10">
            <textarea
              value={recipeForm.comments.comment}
              onChange={(e) =>
                setRecipeForm({
                  ...recipeForm,
                    comments: {...recipeForm.comments, comment: e.target.value}
                })
              }
              className="h-10 w-80 mt-4 absolute bg-white border-2 rounded-lg text-blue-700 placeholder-gray-700 p-1"
              placeholder="Enter Your Comment Here.."
            ></textarea>
            </div>
            <div className="ml-25">
               <textarea
              value={recipeForm.comments.author}
              onChange={(e) =>
                setRecipeForm({
                  ...recipeForm,
                    comments: {...recipeForm.comments, author: e.target.value}
                })
              }
              className="h-10 w-80 mt-4 absolute bg-white border-2 rounded-lg text-blue-700 placeholder-gray-700 p-1"
              placeholder="Enter Your Name Here.."
            ></textarea>
            </div>
            <div className="ml-40">
            <button type="button" onClick={() => addComment()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="40"
                fill="currentColor"
                className="bi bi-plus-square-fill  text-blue-700 absolute"
                viewBox="0 0 16 16"
              >
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0" />
              </svg>
            </button>
            </div>
          </div>
          {recipe.comments.map((c, i) =>(
            <ul key={i} className="mt-15 text-blue-700">
              <li>{c.author}<span className="ml-10">{c.comment}</span></li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;