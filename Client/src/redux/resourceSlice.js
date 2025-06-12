import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import resourceService from "./resourceService";

const initialState = {
  loading: false,
  success: false,
  resources: [
    {
      companyName: "",
      contact: "",
      email: "",
      website: "",
      phone: "",
      countyFor: "",
      offer: "",
      details: "",
      logo: ""
    },
  ],
  resource: {
    companyName: "",
    contact: "",
    email: "",
    website: "",
    phone: "",
    countyFor: "",
    offer: "",
    details: "",
    logo: ""
  },
};

export const addResource = createAsyncThunk("resource/add", async (data) => {
  const {
    companyName,
    contact,
    email,
    website,
    phone,
    countyFor,
    offer,
    details,
    logo
  } = data;

  const response = await resourceService.addResource(
    companyName,
    contact,
    email,
    website,
    phone,
    countyFor,
    offer,
    details,
    logo
  );
  return response.data;
});

export const resourceList = createAsyncThunk("resource/list", async () => {
  // console.log("redux resourceList", email)
  const response = await resourceService.resourceList();
  // console.log("redux resourceList response", response)
  return response.data;
});

export const getResource = createAsyncThunk("resource/getResource", async (id) => {
  const response = await resourceService.getResource(id);
  // console.log(response.data)
  return response.data;
});

export const updateResource = createAsyncThunk("resource/update", async (resource) => {
  const response = await resourceService.updateResource(resource);
  return response.data;
});

export const deleteResource = createAsyncThunk(
  "resource/deleteResource",
  async (id) => {
    const response = await resourceService.deleteResource(id);
    // console.log(response.data)
    return response.data;
  }
);

export const resourceSlice = createSlice({
  name: "resource",
  initialState,
  reducers: {
    resourceSearched(state, action) {
      // console.log("resourceSearched searchText", action.payload)
      state.searchText = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      //resources list
      .addCase(resourceList.pending, (state, action) => {
        console.log("resourceSlice resourceList.pending", action.payload);
        state.loading = true;
        state.success = false;
      })
      .addCase(resourceList.fulfilled, (state, action) => {
        console.log("resourceSlice resourceList.fulfilled", action.payload);
        // console.log(action.payload.resources);
        state.loading = false;
        state.resources = action.payload.resources;
        state.success = true;
      })
      .addCase(resourceList.rejected, (state, action) => {
        console.log("resourceSlice resourceList.rejected", action.payload);
        state.loading = false;
        state.success = false;
      })

      //add resource
      .addCase(addResource.pending, (state, action) => {
        console.log("resourceSlice addResource.pending", action.payload);
        state.loading = true;
        state.success = false;
      })
      .addCase(addResource.fulfilled, (state, action) => {
        console.log("resourceSlice addResource.fulfilled", action.payload);
        console.log(action.payload.resource);
        state.loading = false;
        // state.resources = action.payload.resources;
        state.success = true;
      })
      .addCase(addResource.rejected, (state, action) => {
        console.log("resourceSlice addResource.rejected", action.payload);
        state.loading = false;
        state.success = false;
      })

      // // Get one Resource
      .addCase(getResource.pending, (state, action) => {
        // console.log("resourceSlice getResource.pending", action.payload);
        state.loading = true;
        state.success = false;
      })
      .addCase(getResource.fulfilled, (state, action) => {
        // console.log("resourceSlice getResource.fulfilled", action.payload);
        console.log(action.payload);
        state.loading = false;
        state.resource = action.payload;
        state.success = true;
      })
      .addCase(getResource.rejected, (state, action) => {
        // console.log("resourceSlice getResource.rejected", action.payload);
        state.loading = false;
        state.success = false;
      })

      // // Update Resource
      .addCase(updateResource.pending, (state, action) => {
        // console.log("resourceSlice updateResource.pending", action.payload);
        state.loading = true;
        state.success = false;
      })
      .addCase(updateResource.fulfilled, (state, action) => {
        // console.log("resourceSlice updateResource.fulfilled", action.payload);
        console.log(action.payload);
        state.loading = false;
        state.resource = action.payload;
        state.success = true;
      })
      .addCase(updateResource.rejected, (state, action) => {
        // console.log("resourceSlice updateResource.rejected", action.payload);
        state.loading = false;
        state.success = false;
      })

      // Delete one Resource
      .addCase(deleteResource.pending, (state, action) => {
        // console.log("resourceSlice deleteResource.pending", action.payload);
        state.loading = true;
        state.success = false;
      })
      .addCase(deleteResource.fulfilled, (state, action) => {
        // console.log("resourceSlice deleteResource.fulfilled", action.payload);
        console.log(action.payload);
        state.loading = false;
        state.resource = action.payload;
        state.success = true;
      })
      .addCase(deleteResource.rejected, (state, action) => {
        // console.log("resourceSlice deleteResource.rejected", action.payload);
        state.loading = false;
        state.success = false;
      });
  },
});

export const { resourceSearched } = resourceSlice.actions;

export default resourceSlice.reducer;