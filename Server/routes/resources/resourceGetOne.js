import ResourceModel from "../../schemas/resourceModel.js";

const resourceGetOne = async (req, res) => {
  let { id } = req.params;

  try {
    const resource = await ResourceModel.findById(id);
    res.status(200).json(resource);
  } catch (err) {
    console.log(err);
    res.status(500).send();
  }
};

export default resourceGetOne;