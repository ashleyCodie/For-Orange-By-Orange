import mongoose from "mongoose"
import jobSchema from "./jobSchema.js"

jobSchema.set("toJSON", {
  transform: (doc, ret, options) => {
    ret.id = ret._id
    delete ret._id
    delete ret.__v
    return ret
  }
})

const jobModel = mongoose.model("Job", jobSchema)

export default jobModel