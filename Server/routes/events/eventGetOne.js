import EventModel from "../../schemas/eventModel.js";

const eventGetOne = async (req, res) => {
  let { id } = req.params;

  try {
    const event = await EventModel.findById(id);
    res.status(200).json(event);
  } catch (err) {
    console.log(err);
    res.status(500).send();
  }
};

export default eventGetOne;