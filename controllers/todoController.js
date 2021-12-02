const User = require("../model/User");
const jwt = require("jsonwebtoken");
const addTodo = async (req, res) => {
  try {
    const data = jwt.verify(req.body.token, "hashkey");
    const list = req.body.list;
    const user = data.token;
    const updated_user = await User.updateOne(
      { _id: user._id },
      { todo: list }
    );
    const todo = await User.findOne({ _id: user._id });

    const token = jwt.sign({ token: todo }, "hashkey");
    res.status(200).json({
      token: token,
    });
  } catch (e) {
    if (e) console.log(e);
  }
};
module.exports = { addTodo };
