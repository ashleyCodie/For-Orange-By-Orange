import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./redux/authSlice";
import userReducer from "./redux/userSlice";
import messageReducer from "./redux/messageSlice";
import eventReducer from "./redux/eventSlice"
import recipeReducer from "./redux/recipeSlice"
import resourceReducer from "./redux/resourceSlice"
import jobReducer from "./redux/jobSlice"
import { listenerMiddleware } from "./redux/sessionStorageMiddleware";

const preloadedState = () => {
  if (sessionStorage.getItem("token") !== null) {
    return {
      auth: {
        loading: false,
        isLoggedIn: false,
        user: {
          firstName: "",
          lastName: "",
          username: "",
          email: "",
          token: sessionStorage.getItem("token"),
          avatar: "",
          contactNumber: "",
        },
      },
    };
  }
  return undefined;
};

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    message: messageReducer,
    event: eventReducer,
    recipe: recipeReducer,
    resource: resourceReducer,
    job: jobReducer
  },
  preloadedState: preloadedState(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(listenerMiddleware.middleware),
});