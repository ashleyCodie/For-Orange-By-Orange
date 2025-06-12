import JobModel from "../../schemas/jobModel.js";

const jobGetOne = async (req, res) => {
  let { id } = req.params;

  try {
    const job = await JobModel.findById(id);
    res.status(200).json(job);
  } catch (err) {
    console.log(err);
    res.status(500).send();
  }
};

export default jobGetOne;