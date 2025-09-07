const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");

// @route POST /api/tasks
router.post("/", auth, createTask);

// @route GET /api/tasks
router.get("/", auth, getTasks);

// @route PUT /api/tasks/:id
router.put("/:id", auth, updateTask);

// @route DELETE /api/tasks/:id
router.delete("/:id", auth, deleteTask);

module.exports = router;

