const express = require("express");
const app = express();
const cors = require("cors");
const conn = require("./config/conn");
const User = require("./model/User");

app.use(cors());
app.use(express.json());
app.use("/api", require("./api/index"));
app.get("/get", async (req, res) => {
  const users = await User.find();
  res.json({ users });
});
app.listen(9000, (err) => {
  if (err) console.log(err);
  else console.log("Server Setup Successfull!");
});
