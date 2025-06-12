import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import recipeService from "./recipeService";

const initialState = {
  loading: false,
  success: false,
  recipes: [
    {
      recipeName: "",
      recipeDescription: "",
      ingredients: "",
      cookingDirections: "",
      prepTime: "",
      cookTime: "",
      addedBy: "",
      recipePic: "",
      comments: [{ comment: "", author: ""}]
    },
  ],
  recipe: {
    recipeName: "",
    recipeDescription: "",
    ingredients: "",
    cookingDirections: "",
    prepTime: "",
    cookTime: "",
    addedBy: "",
    recipePic: "",
    comments: [{ comment: "", author: ""}]
  },
};

export const addRecipe = createAsyncThunk("recipe/add", async (data) => {
  const {
    recipeName,
    recipeDescription,
    ingredients,
    cookingDirections,
    prepTime,
    cookTime,
    addedBy,
    recipePic,
    comments 
  } = data;

  const response = await recipeService.addRecipe(
    recipeName,
    recipeDescription,
    ingredients,
    cookingDirections,
    prepTime,
    cookTime,
    addedBy,
    recipePic,
    comments 
  );
  return response.data;
});

export const recipeList = createAsyncThunk("recipe/list", async () => {
  // console.log("redux recipeList", email)
  const response = await recipeService.recipeList();
  // console.log("redux recipeList response", response)
  return response.data;
});

export const getRecipe = createAsyncThunk("recipes/getRecipe", async (id) => {
  const response = await recipeService.getRecipe(id);
  // console.log(response.data)
  return response.data;
});

export const updateRecipe = createAsyncThunk("recipe/update", async (recipe) => {
  const response = await recipeService.updateRecipe(recipe);
  return response.data;
});

export const addComment = createAsyncThunk("recipe/comment", async (recipe) => {
  const response = await recipeService.addComment(recipe);
  return response.data;
});

export const deleteRecipe = createAsyncThunk(
  "recipes/deleteRecipe",
  async (id) => {
    const response = await recipeService.deleteRecipe(id);
    // console.log(response.data)
    return response.data;
  }
);

export const recipeSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {
    recipeSearched(state, action) {
      // console.log("recipeSearched searchText", action.payload)
      state.searchText = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      //recipes list
      .addCase(recipeList.pending, (state, action) => {
        console.log("recipeSlice recipeList.pending", action.payload);
        state.loading = true;
        state.success = false;
      })
      .addCase(recipeList.fulfilled, (state, action) => {
        console.log("recipeSlice recipeList.fulfilled", action.payload);
        // console.log(action.payload.recipes);
        state.loading = false;
        state.recipes = action.payload.recipes;
        state.success = true;
      })
      .addCase(recipeList.rejected, (state, action) => {
        console.log("recipeSlice recipeList.rejected", action.payload);
        state.loading = false;
        state.success = false;
      })

      //add recipe
      .addCase(addRecipe.pending, (state, action) => {
        // console.log("recipeSlice addRecipe.pending", action.payload);
        state.loading = true;
        state.success = false;
      })
      .addCase(addRecipe.fulfilled, (state, action) => {
        // console.log("recipeSlice addRecipe.fulfilled", action.payload);
        console.log(action.payload.recipe);
        state.loading = false;
        // state.recipes = action.payload.recipes;
        state.success = true;
      })
      .addCase(addRecipe.rejected, (state, action) => {
        // console.log("recipeSlice addRecipe.rejected", action.payload);
        state.loading = false;
        state.success = false;
      })

      // // Get one Recipe
      .addCase(getRecipe.pending, (state, action) => {
        // console.log("recipeSlice getRecipe.pending", action.payload);
        state.loading = true;
        state.success = false;
      })
      .addCase(getRecipe.fulfilled, (state, action) => {
        // console.log("recipeSlice getRecipe.fulfilled", action.payload);
        console.log(action.payload);
        state.loading = false;
        state.recipe = action.payload;
        state.success = true;
      })
      .addCase(getRecipe.rejected, (state, action) => {
        // console.log("recipeSlice getRecipe.rejected", action.payload);
        state.loading = false;
        state.success = false;
      })

      // // Update Recipe
      .addCase(updateRecipe.pending, (state, action) => {
        console.log("recipeSlice updateRecipe.pending", action.payload);
        state.loading = true;
        state.success = false;
      })
      .addCase(updateRecipe.fulfilled, (state, action) => {
        console.log("recipeSlice updateRecipe.fulfilled", action.payload);
        console.log(action.payload);
        state.loading = false;
        state.recipe = action.payload;
        state.success = true;
      })
      .addCase(updateRecipe.rejected, (state, action) => {
        console.log("recipeSlice updateRecipe.rejected", action.payload);
        state.loading = false;
        state.success = false;
      })

      .addCase(addComment.pending, (state, action) => {
        console.log("recipeSlice addComment.pending", action.payload);
        state.loading = true;
        state.success = false;
      })
      .addCase(addComment.fulfilled, (state, action) => {
        console.log("recipeSlice addComment.fulfilled", action.payload);
        console.log(action.payload);
        state.loading = false;
        state.recipe = action.payload;
        state.success = true;
      })
      .addCase(addComment.rejected, (state, action) => {
        console.log("recipeSlice addComment.rejected", action.payload);
        state.loading = false;
        state.success = false;
      })

      // Delete one Recipe
      .addCase(deleteRecipe.pending, (state, action) => {
        // console.log("recipeSlice deleteRecipe.pending", action.payload);
        state.loading = true;
        state.success = false;
      })
      .addCase(deleteRecipe.fulfilled, (state, action) => {
        // console.log("recipeSlice deleteRecipe.fulfilled", action.payload);
        console.log(action.payload);
        state.loading = false;
        state.recipe = action.payload;
        state.success = true;
      })
      .addCase(deleteRecipe.rejected, (state, action) => {
        // console.log("recipeSlice deleteRecipe.rejected", action.payload);
        state.loading = false;
        state.success = false;
      });
  },
});

export const { recipeSearched } = recipeSlice.actions;

export default recipeSlice.reducer;