import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addRecipe, recipeList } from "../redux/recipeSlice";

const RecipeModal = ({ setShowModal }) => {
  const [recipeForm, setRecipeForm] = useState({
    recipeName: "",
    recipeDescription: "",
    ingredients: "",
    cookingDirections: "",
    prepTime: "",
    cookTime: "",
    addedBy: "",
    recipePic: "",

  });

  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addRecipe(recipeForm));
    setShowModal(false);
  };

  return (
    <div
      id="crud-modal"
      tabIndex="-1"
      className="overflow-y-auto overflow-x-hidden fixed  z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      style={{ marginLeft: "40%", marginTop: "2%" }}
    >
      <div className="relative p-4 w-full max-w-md max-h-full">
        {/* <!-- Modal content --> */}
        <div className="relative bg-orange-300 rounded-lg shadow-sm dark:bg-gray-700">
          {/* <!-- Modal header --> */}
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
            <h3 className="text-lg font-semibold text-blue-700 dark:text-white">
              Add New Recipe
            </h3>
            <button
              onClick={() => setShowModal(false)}
              type="button"
              className="text-blue-700 bg-transparent hover:bg-gray-200 hover:text-blue-700 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-toggle="crud-modal"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          {/* <!-- Modal body --> */}
          <form onSubmit={handleSubmit} className="p-4 md:p-5">
            <div className="grid gap-4 mb-4 grid-cols-2">
              <div className="col-span-2">
                <label
                  htmlFor="recipeName"
                  className="block mb-2 text-sm font-medium text-blue-700 dark:text-white"
                >
                  Recipe Name
                </label>
                <input
                  value={recipeForm.recipeName}
                  onChange={(e) =>
                    setRecipeForm({
                      ...recipeForm,
                      recipeName: e.target.value,
                    })
                  }
                  type="text"
                  name="recipeName"
                  id="recipeName"
                  className="bg-gray-50 border border-gray-300 text-blue-700 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Recipe Name"
                  required=""
                />
              </div>
              <div className="col-span-2">
                <label
                  htmlFor="recipeDescription"
                  className="block mb-2 text-sm font-medium text-blue-700 dark:text-white"
                >
                  Recipe Description
                </label>
                <textarea
                  value={recipeForm.recipeDescription}
                  onChange={(e) =>
                    setRecipeForm({
                      ...recipeForm,
                      recipeDescription: e.target.value,
                    })
                  }
                  type="text"
                  name="recipeDescription"
                  id="recipeDescription"
                  className="bg-gray-50 border mb-2 border-gray-300 text-blue-700 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Recipe Description"
                  required=""
                ></textarea>
                <label
                  htmlFor="ingredients"
                  className="block mb-2 text-sm font-medium text-blue-700 dark:text-white"
                >
                  Ingredients
                </label>
                <textarea
                  value={recipeForm.ingredients}
                  onChange={(e) =>
                    setRecipeForm({
                      ...recipeForm,
                      ingredients: e.target.value,
                    })
                  }
                  type="text"
                  name="ingredients"
                  id="ingredients"
                  className="bg-gray-50 mb-2 border border-gray-300 text-blue-700 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="List ingredients"
                  required=""
                >
                  {" "}
                </textarea>
                <label
                  htmlFor="cookingDirections"
                  className="block mb-2 text-sm font-medium text-blue-700 dark:text-white"
                >
                  Directions
                </label>
                <textarea
                  value={recipeForm.cookingDirections}
                  onChange={(e) =>
                    setRecipeForm({
                      ...recipeForm,
                      cookingDirections: e.target.value,
                    })
                  }
                  type="text"
                  name="cookingDirections"
                  id="cookingDirections"
                  className="bg-gray-50 border border-gray-300 text-blue-700 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="List cookingDirections"
                  required=""
                >
                  {" "}
                </textarea>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <label
                  htmlFor="prepTime"
                  className="block mb-2 text-sm font-medium text-blue-700 dark:text-white"
                >
                  Prep Time
                </label>
                <input
                  value={recipeForm.prepTime}
                  onChange={(e) =>
                    setRecipeForm({
                      ...recipeForm,
                      prepTime: e.target.value,
                    })
                  }
                  type="text"
                  name="prepTime"
                  id="prepTime"
                  className="bg-gray-50 border border-gray-300 text-blue-700 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="20 mins"
                  required=""
                />
              </div>

              <div className="col-span-2 sm:col-span-1">
                <label
                  htmlFor="cookTime"
                  className="block mb-2 text-sm font-medium text-blue-700 dark:text-white"
                >
                  Cook Time
                </label>
                <input
                  value={recipeForm.cookTime}
                  onChange={(e) =>
                    setRecipeForm({
                      ...recipeForm,
                      cookTime: e.target.value,
                    })
                  }
                  type="text"
                  name="cookTime"
                  id="cookTime"
                  className="bg-gray-50 border border-gray-300 text-blue-700 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="6 mins"
                  required=""
                />
              </div>
              <div className="col-span-2">
                <label
                  htmlFor="addedBy"
                  className="block mb-2 text-sm font-medium text-blue-700 dark:text-white"
                >
                  Added By
                </label>
                <input
                  value={recipeForm.addedBy}
                  onChange={(e) =>
                    setRecipeForm({
                      ...recipeForm,
                      addedBy: e.target.value,
                    })
                  }
                  type="text"
                  name="addedBy"
                  id="addedBy"
                  className="bg-gray-50 border border-gray-300 text-blue-700 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Enter your username"
                  required=""
                />
              </div>

              <div className="col-span-2">
                <label
                  htmlFor="recipePic"
                  className="block mb-2 text-sm font-medium text-blue-700 dark:text-white"
                >
                  Recipe Pic
                </label>
                <input
                  value={recipeForm.recipePic}
                  onChange={(e) =>
                    setRecipeForm({
                      ...recipeForm,
                      recipePic: e.target.value,
                    })
                  }
                  id="recipePic"
                  rows="4"
                  className="block p-2.5 w-full text-sm text-blue-700 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="foodpic.jpg"
                />
              </div>
            </div>
            <button
              type="submit"
              className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                className="me-1 -ms-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Add New Recipe.
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const Recipes = () => {
  const [showModal, setShowModal] = useState(false);
  const { recipes } = useSelector((state) => state.recipe);

  console.log("recipes", recipes);

  const dispatch = useDispatch();
  const navigate = useNavigate();


  useEffect(() => {
    console.log("recipes", recipes);
  }, [recipes]);

  useEffect(() => {
    dispatch(recipeList());
  }, [recipeList]);

  return (
    <div>
      <h1 className="mt-30 pt-10 text-orange-500 text-center text-7xl ">
        Recipes.
      </h1>
      <button
        onClick={() => setShowModal(true)}
        type="button"
        className="bg-orange-500 text-blue-700 w-40 text-lg font-bold inline-flex items-center rounded-lg p-2 ml-5"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          className="bi bi-plus-square-fill pe-1 ml-2"
          viewBox="0 0 16 16"
        >
          <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0" />
        </svg>
        <span className="ml-2">New Recipe.</span>
      </button>
      <div className="grid grid-cols-4 p-5 gap-2">
        {recipes.map((recipe, index) => (
        <Link
          to={`/recipe-details/${recipe.id}`}
          className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <img
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
            src={
              new URL(`../assets/images/${recipe.recipePic}`, import.meta.url)
                .href
            }
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-orange-500 dark:text-orange-500">
              {recipe.recipeName}
            </h5>
            <p className="mb-3 font-normal text-blue-700 dark:text-blue-700">
              {recipe.recipeDescription.substring(0, 50)}...
            </p>
              <p className="mb-3 font-normal text-blue-700 dark:text-blue-700">
              Prep Time: {recipe.prepTime}
            </p>
          </div>
        </Link>
        ))}
      </div>
      {showModal && <RecipeModal setShowModal={setShowModal} />}
    </div>
  );
};

export default Recipes;