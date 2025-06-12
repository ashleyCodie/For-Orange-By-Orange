import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userService from "./userService";


const initialState = {
  loading: false,
  users: [
    {
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
      friends: [{ user_id: "", username: "", firstName: "", lastName: "", avatar: ""}]
    },
  ],
  user: 
    {
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
      friends: [{ user_id: "", username: "", firstName: "", lastName: "", avatar: ""}]
    },
  
};

export const userList = createAsyncThunk("user/list", async () => {
  const response = await userService.userList();
  return response.data;
});

export const addUser = createAsyncThunk("user/addUser", async (data) => {
  console.log("data", data);
  const {
    firstName,
    lastName,
    email,
    username,
    password,
    role,
    country,
    contactNumber,
    company,
    releaseDate,
    complex,
    city,
    state,
    friends
  } = data;

  const response = await userService.addUser(
    firstName,
    lastName,
    email,
    username,
    password,
    role,
    country,
    contactNumber,
    company,
    releaseDate,
    complex,
    city,
    state,
    friends
  );
  return response.data;
});

export const updateUser = createAsyncThunk("user/update", async ( { user }) => {
  console.log("user", user);
  const response = await userService.updateUser(user);
  return response.data;
});

export const getUser = createAsyncThunk("user/getOne", async (id) => {
  const response = await userService.getUser(id)
  return response.data
})

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //List of Users
      .addCase(userList.pending, (state, action) => {
        console.log("userSlice userList.pending", action.payload);
        state.loading = true;
      })
      .addCase(userList.fulfilled, (state, action) => {
        console.log("userSlice userList.fulfilled", action.payload);
        state.loading = false;
        state.isLoggedIn = true;
        state.users = action.payload.users;
      })
      .addCase(userList.rejected, (state, action) => {
        console.log("userSlice userList.rejected", action.payload);
        state.loading = false;
      })

      //Add New User
      .addCase(addUser.pending, (state, action) => {
        console.log("userSlice addUser.pending");
        state.loading = true;
      })
      .addCase(addUser.fulfilled, (state, action) => {
        console.log("userSlice addUser.fulfilled", action.payload);
        state.loading = false;
        state.isLoggedIn = true;
        state.users = action.payload.user;
      })
      .addCase(addUser.rejected, (state, action) => {
        console.log("userSlice addUser.rejected", action.payload);
        state.loading = false;
      })

        //GetOne User
        .addCase(getUser.pending, (state, action) => {
          console.log("userSlice getUser.pending", action.payload);
          state.loading = true;
        })
        .addCase(getUser.fulfilled, (state, action) => {
          console.log("userSlice getUser.fulfilled", action.payload);
          state.loading = false;
          state.isLoggedIn = true;
          state.user = action.payload
        })
        .addCase(getUser.rejected, (state, action) => {
          console.log("userSlice getUser.rejected", action.payload);
          state.loading = false;
        })

      //Update User
      .addCase(updateUser.pending, (state, action) => {
        console.log("userSlice updateUser.pending", action.payload);
        state.loading = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        console.log("userSlice updateUser.fulfilled", action.payload);
        state.loading = false;
        state.isLoggedIn = true;
        state.user = action.payload.user
      })
      .addCase(updateUser.rejected, (state, action) => {
        console.log("userSlice updateUser.rejected", action.payload);
        state.loading = false;
      })
  },
});

export default userSlice.reducer;