const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/havi", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const conn = mongoose.connection;
conn.on("open", () => console.log("Connected to Database Successfully!!"));
conn.on("error", () =>
  console.log("Error Connecting to Database Successfully!!")
);

module.exports = conn;
