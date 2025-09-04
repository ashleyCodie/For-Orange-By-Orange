import "dotenv/config"
import cors from "cors"
import express from "express"
import mongoose from "mongoose"
import userIndex from "./routes/users/userIndex.js"
import messageIndex from "./routes/messages/messageIndex.js"
import eventIndex from "./routes/events/eventIndex.js"
import recipeIndex from "./routes/recipes/recipeIndex.js"
import resourceIndex from "./routes/resources/resourceIndex.js"
import jobIndex from "./routes/jobs/jobIndex.js"


const app = express()
app.use(express.json())
app.use(cors())
const port = 8006

app.get("/", (req, res) =>{
    res.send("Hello World")
}) 

app.use("/users", userIndex)
app.use("/messages", messageIndex)
app.use("/events", eventIndex)
app.use("/recipes", recipeIndex)
app.use("/resources", resourceIndex)
app.use("/jobs", jobIndex)

// app.all("*", (req, res) => {
//     res.status(404).json({
//         success: false,
//         data: "404"
//     })
// })

try{
const mongoURL =  process.env.MONGODB_URL || ""
await mongoose.connect(mongoURL)
console.log(`Connected to database ${mongoURL}`)
   
app.listen(port, () => {
console.log(`For Orange By Orange App is listening on ${port}`)
    })
}
catch(err) {
    console.log(err)
}