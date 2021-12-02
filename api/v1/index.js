const express = require("express");
const { signUp, signIn } = require("../../controllers/loginSignupController");
const { addTodo } = require("../../controllers/todoController");
const router = express.Router();
router.post("/signup", signUp);
router.post("/signin", signIn);
router.post("/addTodo", addTodo);
module.exports = router;
