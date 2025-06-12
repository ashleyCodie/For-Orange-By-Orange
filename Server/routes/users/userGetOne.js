
import UserModel from "../../schemas/userModel.js";

const userGetOne = async (req, res) => {
  let { id } = req.params;

  try {
    const user = await UserModel.findById(id);
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
    res.status(500).send();
  }
};

export default userGetOne;