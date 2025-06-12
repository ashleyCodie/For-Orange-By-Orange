import axios from "axios";

const userService = {
  userList: async () => {
    return await axios.get(
      `${import.meta.env.VITE_NODE_SERVER_URL}/users/list`
    );
  },
  addUser: async (
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
  ) => {
    return await axios.post(
      `${import.meta.env.VITE_NODE_SERVER_URL}/users`,
      {
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
      },
      { headers: { "Content-Type": "application/json" } }
    );
  },
  updateUser: async (user) => {
    console.log("user.id, user", user.id);
    return await axios.put(
      `${import.meta.env.VITE_NODE_SERVER_URL}/users/${user.id}`,
      user,
      { headers: { "Content-Type": "application/json" } }
    );
  },
  getUser: async (id) => {
    return axios.get(
      `${import.meta.env.VITE_NODE_SERVER_URL}/users/detail/${id}`,
      { headers: { "Content-Type": "application/json" } }
    )
  }
};

export default userService;