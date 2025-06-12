import axios from "axios";

const jobService = {
  jobList: async () => {
    return await axios.get(`${import.meta.env.VITE_NODE_SERVER_URL}/jobs`);
  },
  addJob: async (
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
  ) => {
    return await axios.post(
      `${import.meta.env.VITE_NODE_SERVER_URL}/jobs`,
      {
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
      },
      { headers: { "Content-Type": "application/json" } }
    );
  },
  getJob: async (id) => {
    return await axios.get(
      `${import.meta.env.VITE_NODE_SERVER_URL}/jobs/detail/${id}`,
      { headers: { "Content-Type": "application/json" } }
    );
  },

  updateJob: async (event) => {
    return await axios.put(
      `${import.meta.env.VITE_NODE_SERVER_URL}/jobs/${job.id}`,
       job,
      { headers: { "Content-Type": "application/json" } }
    );
  },

  deleteJob: async (id) => {
    return await axios.delete(
      `${import.meta.env.VITE_NODE_SERVER_URL}/jobs/${id}`,
      { headers: { "Content-Type": "application/json" } }
    );
  },
};

export default jobService;