import mongoose from "mongoose"
import resourceSchema from "./resourceSchema.js"

resourceSchema.set("toJSON", {
  transform: (doc, ret, options) => {
    ret.id = ret._id
    delete ret._id
    delete ret.__v
    return ret
  }
})

const resourceModel = mongoose.model("Resource", resourceSchema)

export default resourceModel