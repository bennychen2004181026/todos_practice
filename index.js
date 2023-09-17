const express = require("express");
const cors = require("cors");
const router = require("./router");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(8000, () => {
  console.log("Listening on port 8000");
});
