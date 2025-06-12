import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import eventService from "./eventService";

const initialState = {
  loading: false,
  success: false,
  events: [
    {
      eventDate: "",
      eventName: "",
      eventDescription: "",
      host: "",
      city: "",
      state: "",

      time: "",
      price: "",
    },
  ],
  event: {
    eventDate: "",
    eventName: "",
    eventDescription: "",
    host: "",
    city: "",
    state: "",
    time: "",
    price: "",
  },
};

export const addEvent = createAsyncThunk("event/add", async (data) => {
  const {
    eventDate,
    eventName,
    eventDescription,
    host,
    city,
    state,
    time,
    price,
  } = data;

  const response = await eventService.addEvent(
    eventDate,
    eventName,
    eventDescription,
    host,
    city,
    state,
    time,
    price
  );
  return response.data;
});

export const eventList = createAsyncThunk("event/list", async () => {
  // console.log("redux eventList", email)
  const response = await eventService.eventList();
  // console.log("redux eventList response", response)
  return response.data;
});

export const getEvent = createAsyncThunk("events/getEvent", async (id) => {
  const response = await eventService.getEvent(id);
  // console.log(response.data)
  return response.data;
});

export const updateEvent = createAsyncThunk("event/update", async (event) => {
  const response = await eventService.updateEvent(event);
  return response.data;
});

export const deleteEvent = createAsyncThunk(
  "events/deleteEvent",
  async (id) => {
    const response = await eventService.deleteEvent(id);
    // console.log(response.data)
    return response.data;
  }
);

export const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    eventSearched(state, action) {
      // console.log("eventSearched searchText", action.payload)
      state.searchText = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      //events list
      .addCase(eventList.pending, (state, action) => {
        console.log("eventSlice eventList.pending", action.payload);
        state.loading = true;
        state.success = false;
      })
      .addCase(eventList.fulfilled, (state, action) => {
        console.log("eventSlice eventList.fulfilled", action.payload);
        // console.log(action.payload.events);
        state.loading = false;
        state.events = action.payload.events;
        state.success = true;
      })
      .addCase(eventList.rejected, (state, action) => {
        console.log("eventSlice eventList.rejected", action.payload);
        state.loading = false;
        state.success = false;
      })

      //add event
      .addCase(addEvent.pending, (state, action) => {
        console.log("eventSlice addEvent.pending", action.payload);
        state.loading = true;
        state.success = false;
      })
      .addCase(addEvent.fulfilled, (state, action) => {
        console.log("eventSlice addEvent.fulfilled", action.payload);
        console.log(action.payload.event);
        state.loading = false;
        // state.events = action.payload.events;
        state.success = true;
      })
      .addCase(addEvent.rejected, (state, action) => {
        console.log("eventSlice addEvent.rejected", action.payload);
        state.loading = false;
        state.success = false;
      })

      // // Get one Event
      .addCase(getEvent.pending, (state, action) => {
        // console.log("eventSlice getEvent.pending", action.payload);
        state.loading = true;
        state.success = false;
      })
      .addCase(getEvent.fulfilled, (state, action) => {
        // console.log("eventSlice getEvent.fulfilled", action.payload);
        console.log(action.payload);
        state.loading = false;
        state.event = action.payload;
        state.success = true;
      })
      .addCase(getEvent.rejected, (state, action) => {
        // console.log("eventSlice getEvent.rejected", action.payload);
        state.loading = false;
        state.success = false;
      })

      // // Update Event
      .addCase(updateEvent.pending, (state, action) => {
        // console.log("eventSlice updateEvent.pending", action.payload);
        state.loading = true;
        state.success = false;
      })
      .addCase(updateEvent.fulfilled, (state, action) => {
        // console.log("eventSlice updateEvent.fulfilled", action.payload);
        console.log(action.payload);
        state.loading = false;
        state.event = action.payload;
        state.success = true;
      })
      .addCase(updateEvent.rejected, (state, action) => {
        // console.log("eventSlice updateEvent.rejected", action.payload);
        state.loading = false;
        state.success = false;
      })

      // Delete one Event
      .addCase(deleteEvent.pending, (state, action) => {
        // console.log("eventSlice deleteEvent.pending", action.payload);
        state.loading = true;
        state.success = false;
      })
      .addCase(deleteEvent.fulfilled, (state, action) => {
        // console.log("eventSlice deleteEvent.fulfilled", action.payload);
        console.log(action.payload);
        state.loading = false;
        state.event = action.payload;
        state.success = true;
      })
      .addCase(deleteEvent.rejected, (state, action) => {
        // console.log("eventSlice deleteEvent.rejected", action.payload);
        state.loading = false;
        state.success = false;
      });
  },
});

export const { eventSearched } = eventSlice.actions;

export default eventSlice.reducer;