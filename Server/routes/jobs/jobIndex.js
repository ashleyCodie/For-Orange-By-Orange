import express from "express"
import jobCreate from "./jobCreate.js"
import jobsGetAll from "./jobsGetAll.js"
import jobGetOne from "./jobGetOne.js"
// import jobDelete from "./jobDelete.js"
// import jobUpdate from "./jobUpdate.js"



const jobIndex = express.Router()

jobIndex.post("/", jobCreate)
jobIndex.get("/", jobsGetAll)
jobIndex.get("/detail/:id", jobGetOne)
// jobIndex.put("/:id", jobUpdate)
// jobIndex.delete("/:id", jobDelete)


export default jobIndex