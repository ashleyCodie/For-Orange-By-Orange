import "dotenv/config"
import axios from "axios"
import { generateFakeJobs } from "./generateFakeJobs.js"


const seedJobs = generateFakeJobs(1)
console.log("seedJobs", seedJobs)

seedJobs.forEach(async (job) => {
    const addJob = await axios.post(`${process.env.SERVER_URL}/jobs`, job)
    console.log("addJob", addJob.data)
})