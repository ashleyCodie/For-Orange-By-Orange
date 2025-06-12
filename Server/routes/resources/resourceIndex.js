import express from "express"
import resourceCreate from "./resourceCreate.js"
import resourcesGetAll from "./resourcesGetAll.js"
import resourceGetOne from "./resourceGetOne.js"
// import resourceDelete from "./resourceDelete.js"
// import resourceUpdate from "./resourceUpdate.js"



const resourceIndex = express.Router()

resourceIndex.post("/", resourceCreate)
resourceIndex.get("/", resourcesGetAll)
resourceIndex.get("/detail/:id", resourceGetOne)
// resourceIndex.put("/:id", resourceUpdate)
// resourceIndex.delete("/:id", resourceDelete)


export default resourceIndex