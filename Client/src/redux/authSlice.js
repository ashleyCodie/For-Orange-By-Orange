import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";
// import {updateUser} from "./userSlice"

const initialState = {
  loading: false,
  isLoggedIn: false,
  user: {
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    token: "",
    role: "",
    avatar: "",
    country: "",
    contactNumber: "",
    company: "",
    releaseDate: "",
    complex: "",
    city: "",
    state: "",
    friends: [],
  },
};

export const authLogin = createAsyncThunk("auth/login", async (credentials) => {
  const { email, password } = credentials;
  const response = await authService.authLogin(email, password);
  return response.data;
});

export const checkLogin = createAsyncThunk("auth/checkLogin", async (token) => {
  const response = await authService.checkLogin(token);
  return response.data;
});

export const logout = createAsyncThunk("auth/logout", async (token) => {
  const response = await authService.logout(token);
  return response.data;
});

export const updateUser = createAsyncThunk("user/update", async (user) => {
  console.log("user", user);
  const response = await authService.updateUser(user);
  return response.data;
});

export const getUser = createAsyncThunk("user/getOne", async (id) => {
  const response = await authService.getUser(id);
  return response.data;
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //login
      .addCase(authLogin.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(authLogin.fulfilled, (state, action) => {
        console.log(
          "authLogin.fulfilled action.payload.user",
          action.payload.user
        );
        state.loading = false;
        state.isLoggedIn = true;
        state.user = { ...action.payload.user };
      })
      .addCase(authLogin.rejected, (state, action) => {
        state.loading = false;
      })

      //checkLogin
      .addCase(checkLogin.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(checkLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.isLoggedIn = true;
        state.user = { ...action.payload.user };
      })
      .addCase(checkLogin.rejected, (state, action) => {
        state.loading = false;
      })

      //logout
      .addCase(logout.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.loading = false;
        state.isLoggedIn = false;
        state.user = {
          firstName: "",
          lastName: "",
          email: "",
          roles: [],
          token: "",
        };
      })
      .addCase(logout.rejected, (state, action) => {
        state.loading = false;
      })

      //GetOne User
      .addCase(getUser.pending, (state, action) => {
        // console.log("authSlice getUser.pending", action.payload);
        state.loading = true;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        // console.log("authSlice getUser.fulfilled", action.payload);
        state.loading = false;
        state.isLoggedIn = true;
        state.user = action.payload.user;
      })
      .addCase(getUser.rejected, (state, action) => {
        // console.log("authSlice getUser.rejected", action.payload);
        state.loading = false;
      })

      //Update User
      .addCase(updateUser.pending, (state, action) => {
        // console.log("authSlice updateUser.pending", action.payload);
        state.loading = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        // console.log("authSlice updateUser.fulfilled", action.payload);
        state.loading = false;
        state.isLoggedIn = true;
        state.user = action.payload.user;
      })
      .addCase(updateUser.rejected, (state, action) => {
        // console.log("authSlice updateUser.rejected", action.payload);
        state.loading = false;
      });
  },
});

export default authSlice.reducer;