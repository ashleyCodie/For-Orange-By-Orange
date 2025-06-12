import mongoose from "mongoose";

const Schema = mongoose.Schema;

const eventSchema = new Schema({
  eventDate: {
    type: Date,
    default: "",
  },
  eventName: {
    type: String,
    default: "",
  },
  eventDescription: {
    type: String,
    default: "",
  },
  host: {
    type: String,
    default: "",
  },
  city: {
    type: String,
    default: "",
  },
  state: {
    type: String,
    default: "",
  },
  time: {
    type: String,
    default: "",
  },
  price: {
    type: String,
    default: "",
  },

});

export default eventSchema;