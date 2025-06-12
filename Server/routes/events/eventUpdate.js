import EventModel from "../../schemas/eventModel.js"


const eventUpdate = async (req, res) => {
    let {id} = req.params
    console.log(req.body)
    let {eventDate, eventName, eventDescription, host, city, state, time, price} = req.body
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
            const event = await EventModel.findByIdAndUpdate({ "_id": id }, {
                eventDate, eventName, eventDescription, host, city, state, time, price
            })
            console.log("event", event)
            res.status(200).json({ "message": "Event has been Updated.", event: event, success: true })
        }
        catch (err) {
            console.log(err)
            res.status(500).send(err)
          }
    }
}

export default eventUpdate