import ResourceModel from "../../schemas/resourceModel.js";

const resourcesGetAll = async (req, res) => {
  try {
    const resources = await ResourceModel.find();
    res.status(200).json({ success: true, resources: resources });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

export default resourcesGetAll;