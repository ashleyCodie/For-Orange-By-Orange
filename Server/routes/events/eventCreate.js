import EventModel from "../../schemas/eventModel.js"



const eventCreate = async (req, res) => {

    let { eventDate, eventName, eventDescription, host, city, state, time, price } = req.body
    console.log(eventDate, eventDescription, host, city, state, time, price)
    console.log(eventDate, eventDescription, host, city, state, time, price)

    if (
        (!eventDate) ||
        (!eventName) ||
        (!eventDescription) ||
        (!host) ||
        (!city) || 
        (!state) ||
        (!time) ||
        (!price)

   
      
    ) {
        console.log("Error: Event parameters are not valid.")
        res.status(500).send("Error: Event parameters are not valid.")
    }
    else {
        try {
            const event = await EventModel.create({
                eventDate, eventName, eventDescription, host, city, state, time, price
            })
            console.log("event", event)
            res.status(200).json({ "message": "Event has been Created.", event: event, success: true })
        }
        catch (err) {
            console.log(err)
            res.status(500).send(err)
          }
    }
}

export default eventCreate