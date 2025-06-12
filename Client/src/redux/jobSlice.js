import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import jobService from "./jobService";

const initialState = {
  loading: false,
  success: false,
  searchText: "",
  jobs: [
    {
      jobTitle: "",
      companyName: "",
      contact: "",
      email: "",
      website: "",
      phone: "",
      location: "",
      description: "",
      requirements: "",
      salary: "",
      logo: "",
    },
  ],
  job: {
    jobTitle: "",
    companyName: "",
    contact: "",
    email: "",
    website: "",
    phone: "",
    location: "",
    description: "",
    requirements: "",
    salary: "",
    logo: "",
  },
};

export const addJob = createAsyncThunk("job/add", async (data) => {
  const {
    jobTitle,
    companyName,
    contact,
    email,
    website,
    phone,
    location,
    description,
    requirements,
    salary,
    logo,
  } = data;

  const response = await jobService.addJob(
    jobTitle,
    companyName,
    contact,
    email,
    website,
    phone,
    location,
    description,
    requirements,
    salary,
    logo,
  );
  return response.data;
});

export const jobList = createAsyncThunk("job/list", async () => {
  // console.log("redux jobList", email)
  const response = await jobService.jobList();
  // console.log("redux jobList response", response)
  return response.data;
});

export const getJob = createAsyncThunk(
  "job/getJob",
  async (id) => {
    const response = await jobService.getJob(id);
    // console.log(response.data)
    return response.data;
  }
);

// export const updateJob = createAsyncThunk(
//   "job/update",
//   async (job) => {
//     const response = await jobService.updateJob(job);
//     return response.data;
//   }
// );

// export const deleteJob = createAsyncThunk(
//   "job/deleteJob",
//   async (id) => {
//     const response = await jobService.deleteJob(id);
//     // console.log(response.data)
//     return response.data;
//   }
// );

export const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    jobSearched(state, action) {
      console.log("jobSearched searchText", action.payload)
      state.searchText = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      //jobs list
      .addCase(jobList.pending, (state, action) => {
        console.log("jobSlice jobList.pending", action.payload);
        state.loading = true;
        state.success = false;
      })
      .addCase(jobList.fulfilled, (state, action) => {
        console.log("jobSlice jobList.fulfilled", action.payload);
        // console.log(action.payload.jobs);
        state.loading = false;
        state.jobs = action.payload.jobs;
        state.success = true;
      })
      .addCase(jobList.rejected, (state, action) => {
        console.log("jobSlice jobList.rejected", action.payload);
        state.loading = false;
        state.success = false;
      })

      //add job
      .addCase(addJob.pending, (state, action) => {
        console.log("jobSlice addJob.pending", action.payload);
        state.loading = true;
        state.success = false;
      })
      .addCase(addJob.fulfilled, (state, action) => {
        console.log("jobSlice addJob.fulfilled", action.payload);
        console.log(action.payload.job);
        state.loading = false;
        // state.jobs = action.payload.jobs;
        state.success = true;
      })
      .addCase(addJob.rejected, (state, action) => {
        console.log("jobSlice addJob.rejected", action.payload);
        state.loading = false;
        state.success = false;
      })

       //get one job
          .addCase(getJob.pending, (state, action) => {
            // console.log("jobSlice getJob.pending", action.payload);
            state.loading = true;
            state.success = false;
          })
          .addCase(getJob.fulfilled, (state, action) => {
            // console.log("jobSlice getJob.fulfilled", action.payload);
            console.log(action.payload);
            state.loading = false;
            state.job = action.payload;
            state.success = true;
          })
          .addCase(getJob.rejected, (state, action) => {
            // console.log("jobSlice getJob.rejected", action.payload);
            state.loading = false;
            state.success = false;
          })
  },
});

export const { jobSearched } = jobSlice.actions;

export default jobSlice.reducer;