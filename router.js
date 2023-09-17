const express = require("express");

const router = express.Router();

const data = [
    {
      id: 1,
      description: 'task 1',
      done: false,
    },
    {
      id: 2,
      description: 'task 2',
      done: false,
    },
    {
      id: 3,
      description: 'task 3',
      done: false,
    },
  ];

  router.get('/tasks',(req,res)=>{
    console.log(1)
    res.send(data)
  })

  module.exports = router;