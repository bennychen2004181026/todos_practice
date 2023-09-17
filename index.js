const express = require("express");
const app = express();
const router = require("./router");
const cors = (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    next();
  };
  app.use(express.json());
app.use(cors);
app.use(router);
app.listen(3000, () => {
  console.log("Listening on port 3000");
});
