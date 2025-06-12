import mongoose from "mongoose"

const Schema = mongoose.Schema

const userSchema = new Schema({
  firstName: {
    type: String,
    default: ""
  },
  lastName: {
    type: String,
    default: ""
  },
  email: {
    type: String,
    default: ""
  },
  username: {
    type: String,
    default: ""
  },
  password: {
    type: String,
    default: ""
  },
  token: {
    type: [ String ]
  },
  role: [ String ],
  avatar: {
    type: String,
    default: ""
  },
  contactNumber: {
    type: String,
    default: ""
  },
  company: {
    type: String,
    default: ""
  },
  aboutMe: {
    type: String,
    default: ""
  },
  releaseDate: {
    type: String,
    default: ""
  },
  complex: {
    type: String,
    default: ""
  },
  city: {
    type: String,
    default: ""
  },
  state: {
    type: String,
    default: ""
  },
  friends: [
    {
      user_id: {type: String, default: ""},
      username: {type: String, default: ""},
      firstName: {type: String, default: ""},
      lastName: {type: String, default: ""},
      avatar: {type: String, default: ""}
    }
  ]
})
export default userSchema