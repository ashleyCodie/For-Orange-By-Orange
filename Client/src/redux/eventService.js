import axios from "axios";

const eventService = {
  eventList: async () => {
    return await axios.get(`${import.meta.env.VITE_NODE_SERVER_URL}/events`);
  },
  addEvent: async (
    eventDate,
    eventName,
    eventDescription,
    host,
    city,
    state,
    time,
    price,
  ) => {
    return await axios.post(
      `${import.meta.env.VITE_NODE_SERVER_URL}/events`,
      {
        eventDate,
        eventName,
        eventDescription,
        host,
        city,
        state,
        time,
        price,
      },
      { headers: { "Content-Type": "application/json" } }
    );
  },
  getEvent: async (id) => {
    return await axios.get(
      `${import.meta.env.VITE_NODE_SERVER_URL}/events/detail/${id}`,
      { headers: { "Content-Type": "application/json" } }
    );
  },

  updateEvent: async (event) => {
    return await axios.put(
      `${import.meta.env.VITE_NODE_SERVER_URL}/events/${event.id}`,
       event,
      { headers: { "Content-Type": "application/json" } }
    );
  },

  deleteEvent: async (id) => {
    return await axios.delete(
      `${import.meta.env.VITE_NODE_SERVER_URL}/events/${id}`,
      { headers: { "Content-Type": "application/json" } }
    );
  },
};

export default eventService;