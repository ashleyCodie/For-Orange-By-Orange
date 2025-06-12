import mongoose from "mongoose";

const Schema = mongoose.Schema;

const jobSchema = new Schema({
  jobTitle: {
    type: String,
    default: "",
  },
  companyName: {
    type: String,
    default: "",
  },
  contact: {
    type: String,
    default: "",
  },
  email: {
    type: String,
    default: "",
  },
  website: {
    type: String,
    default: "",
  },
  phone: {
    type: String,
    default: "",
  },
  location: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
  requirements: {
    type: String,
    default: "",
  },
  salary: {
    type: String,
    default: "",
  },
  logo: {
    type: String,
    default: "",
  },
});

export default jobSchema;

// jobTitle: "",
// companyName: "",
// contact: "",
// email: "",
// website: "",
// phone: "",
// description: "",
// requirements: "",
// salary: "",
// logo: ""
