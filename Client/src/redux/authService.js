import axios from "axios"

const authService = {
    authLogin: async (email, password) => {
        return await axios.post(
            `${import.meta.env.VITE_NODE_SERVER_URL}/users/login`,
            { email, password }
        )
    },
    checkLogin: async (token) => {
        return await axios.get(
            `${import.meta.env.VITE_NODE_SERVER_URL}/users/me/${token}`
        )
    },
    logout: async (token) => {
        return await axios.get(
            `${import.meta.env.VITE_NODE_SERVER_URL}/users/logout/${token}`
        )
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

}

export default authService