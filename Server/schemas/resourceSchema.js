import mongoose from "mongoose";

const Schema = mongoose.Schema;

const resourceSchema = new Schema({
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
  countyFor: {
    type: String,
    default: "",
  },
  offer: {
    type: String,
    default: "",
  },
  details: {
    type: String,
    default: "",
  },
  logo: {
    type: String,
    default: "",
  }

});

export default resourceSchema;