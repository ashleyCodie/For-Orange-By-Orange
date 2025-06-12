import ResourceModel from "../../schemas/resourceModel.js"



const resourceCreate = async (req, res) => {

    let {  companyName, contact, email, website, phone, countyFor, offer, details, logo  } = req.body
    console.log(companyName, contact, email, phone, countyFor, offer, details, logo   )
    console.log(companyName, contact, email, phone, countyFor, offer, details, logo  )

    if (
        (!companyName) ||
        (!contact) ||
        (!email) ||
        (!phone) ||
        (!countyFor) ||
        (!offer) ||
        (!details)
    ) {
        console.log("Error: Resource parameters are not valid.")
        res.status(500).send("Error: Resource parameters are not valid.")
    }
    else {
        try {
            const resource = await ResourceModel.create({
                companyName, contact, email, website, phone, countyFor, offer, details, logo  
            })
            console.log("resource", resource)
            res.status(200).json({ "message": "Resource has been Created.", resource: resource, success: true })
        }
        catch (err) {
            console.log(err)
            res.status(500).send(err)
          }
    }
}

export default resourceCreate