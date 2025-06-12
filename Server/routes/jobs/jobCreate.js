import JobModel from "../../schemas/jobModel.js"



const jobCreate = async (req, res) => {

    let { jobTitle, companyName, contact, email, website, phone, location, description, requirements, salary, logo   } = req.body
    console.log(jobTitle, companyName, contact, email, website, phone, location, description, requirements, salary, logo   )
    console.log(jobTitle, companyName, contact, email, website, phone, location, description, requirements, salary, logo  )

    if (
        (!jobTitle) ||
        (!companyName) ||
        (!contact) ||
        (!email) ||
        (!website) ||
        (!phone) 
  
 
    ) {
        console.log("Error: Job parameters are not valid.")
        res.status(500).send("Error: Job parameters are not valid.")
    }
    else {
        try {
            const job = await JobModel.create({
                jobTitle, companyName, contact, email, website, phone, location, description, requirements, salary, logo  
            })
            console.log("job", job)
            res.status(200).json({ "message": "Job has been Created.", job: job, success: true })
        }
        catch (err) {
            console.log(err)
            res.status(500).send(err)
          }
    }
}

export default jobCreate