import JobModel from "../../schemas/jobModel.js";

const jobsGetAll = async (req, res) => {
  try {
    const jobs = await JobModel.find();
    res.status(200).json({ success: true, jobs: jobs });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

export default jobsGetAll;