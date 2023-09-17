const express = require("express");

const router = express.Router();

const data = [
  {
    id: 1,
    description: "task 1",
    done: false,
  },
  {
    id: 2,
    description: "task 2",
    done: false,
  },
  {
    id: 3,
    description: "task 3",
    done: false,
  },
];

router.get("/tasks", (req, res) => {
  const { description } = req.query;
  if (description) {
    console.log(description);
    const filtered = data.filter((task) =>
      task.description.includes(description)
    );
    console.log(filtered);
    res.json(filtered);
    return;
  }
  res.json(data);
  // return
});

router.get("/tasks/:id", (req, res) => {
  const id = Number(req.params.id);
  const task = data.find((task) => task.id === id);
  if (!task) {
    res.status(404).json({
      msg: "Not found",
    });
    return;
  }
  res.json(task);
});

router.put("./tasks/:id", (req, res) => {
  const id = Number(req.params.id);
  console.log(id);
  const task = data.find((task) => task.id === id);
  if (!task) {
    res.status(404).json({
      msg: `No id:${id} found`,
    });
    return;
  }

  const { description, done } = req.body;
  if (description !== undefined) {
    task.description = description;
  }
  if (done !== undefined) {
    task.done = done;
  }
  
  res.json(task);
});

module.exports = router;
