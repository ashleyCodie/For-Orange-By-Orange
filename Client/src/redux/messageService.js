import axios from "axios";

const messageService = {
  messageList: async () => {
    return await axios.get(`${import.meta.env.VITE_NODE_SERVER_URL}/messages`);
  },
  addMessage: async (
    messageDate,
    firstName,
    lastName,
    company,
    email,
    country,
    phoneNumber,
    messageBody
  ) => {
    return await axios.post(
      `${import.meta.env.VITE_NODE_SERVER_URL}/messages`,
      {
        messageDate,
        firstName,
        lastName,
        company,
        email,
        country,
        phoneNumber,
        messageBody,
      },
      { headers: { "Content-Type": "application/json" } }
    );
  },
  getMessage: async (id) => {
    return await axios.get(
      `${import.meta.env.VITE_NODE_SERVER_URL}/messages/detail/${id}`,
      { headers: { "Content-Type": "application/json" } }
    );
  },

  deleteMessage: async (id) => {
    return await axios.delete(
      `${import.meta.env.VITE_NODE_SERVER_URL}/messages/${id}`,
      { headers: { "Content-Type": "application/json" } }
    );
  },
};

export default messageService;