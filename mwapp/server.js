const express = require("express");
var cors = require("cors");

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.use(express.static("./resources"));

app.post("/email", (req, res) => {
  console.log("we recieved a post request");
  res.send("thanks");
});

app.listen(port, () => {
  console.log("backend is listening on port 5000");
});
