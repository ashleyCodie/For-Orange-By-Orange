
import EventModel from "../../schemas/eventModel.js";


const eventDelete = async (req, res) => {
  console.log(req.body)
  let { id } = req.params

  try {
    const Event =  await EventModel.deleteOne({ "_id": id })
    res.status(200).json({ "message": "Success. Event deleted." })
  }
  catch (err) {
    console.log(err)
    res.status(500).send(err)
  }
}

export default eventDelete