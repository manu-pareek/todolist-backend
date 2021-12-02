const User = require("../model/User");
const jwt = require("jsonwebtoken");
const signIn = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });

    if (user === null) {
      res.status(404).json({
        message: "User Does not Exist. Please Sign up",
      });
    } else if (
      req.body.email === user.email &&
      req.body.password === user.password
    ) {
      const token = jwt.sign(
        {
          token: user,
        },
        "hashkey"
      );

      res.status(200).json({
        message: "Login Successful!",

        token: token,
        role: user.role,
      });
    } else {
      res.status(404).json({
        message: "Wrong Credentials!",
      });
    }
  } catch (e) {
    res.status(400).json({
      message: e,
    });
  }
};
const signUp = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });
    if (user !== null) {
      res.status(404).json({
        message: "User  Exist. Please Login",
      });
    } else {
      user = await User.create(req.body);
      res.status(200).json({
        message: "User  Signup Successful. Please Login",
      });
    }
  } catch (e) {
    console.log(e);
    res.status(400).json({
      message: e,
    });
  }
};
module.exports = { signIn, signUp };
