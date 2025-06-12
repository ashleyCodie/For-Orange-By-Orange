import axios from "axios";

const resourceService = {
  resourceList: async () => {
    return await axios.get(`${import.meta.env.VITE_NODE_SERVER_URL}/resources`);
  },
  addResource: async (
    companyName,
    contact,
    email,
    website,
    phone,
    countyFor,
    offer,
    details,
    logo
  ) => {
    return await axios.post(
      `${import.meta.env.VITE_NODE_SERVER_URL}/resources`,
      {
        companyName,
        contact,
        email,
        website,
        phone,
        countyFor,
        offer,
        details,
        logo
      },
      { headers: { "Content-Type": "application/json" } }
    );
  },
  getResource: async (id) => {
    return await axios.get(
      `${import.meta.env.VITE_NODE_SERVER_URL}/resources/detail/${id}`,
      { headers: { "Content-Type": "application/json" } }
    );
  },

  updateResource: async (event) => {
    return await axios.put(
      `${import.meta.env.VITE_NODE_SERVER_URL}/resources/${resource.id}`,
       resource,
      { headers: { "Content-Type": "application/json" } }
    );
  },

  deleteResource: async (id) => {
    return await axios.delete(
      `${import.meta.env.VITE_NODE_SERVER_URL}/resources/${id}`,
      { headers: { "Content-Type": "application/json" } }
    );
  },
};

export default resourceService;