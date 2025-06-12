import express from "express"
import eventCreate from "./eventCreate.js"
import eventsGetAll from "./eventsGetAll.js"
import eventGetOne from "./eventGetOne.js"
import eventDelete from "./eventDelete.js"
import eventUpdate from "./eventUpdate.js"



const eventIndex = express.Router()

eventIndex.post("/", eventCreate)
eventIndex.get("/", eventsGetAll)
eventIndex.get("/detail/:id", eventGetOne)
eventIndex.put("/:id", eventUpdate)
eventIndex.delete("/:id", eventDelete)


export default eventIndex