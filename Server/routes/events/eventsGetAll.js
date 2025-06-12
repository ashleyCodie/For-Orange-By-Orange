import EventModel from "../../schemas/eventModel.js";

const eventsGetAll = async (req, res) => {
  try {
    const events = await EventModel.find();
    res.status(200).json({ success: true, events: events });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

export default eventsGetAll;