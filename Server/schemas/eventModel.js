import mongoose from "mongoose"
import eventSchema from "./eventSchema.js"

eventSchema.set("toJSON", {
  transform: (doc, ret, options) => {
    ret.id = ret._id
    delete ret._id
    delete ret.__v
    return ret
  }
})

const eventModel = mongoose.model("Event", eventSchema)

export default eventModel