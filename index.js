const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());
require("dotenv").config();
const { mongoose } = require("./db/connection");
const formsRoute = require("./routes/forms.route");
const responsesRoute = require("./routes/responses.route");

app.get("/api/v1/health", async (req, res) => {
  res.status(200).send("form api is running and healthy.");
});

app.use("/api/v1/forms", formsRoute);
app.use("/api/v1/responses", responses);

//default error routers
app.use((req, res) => {
  res.status(404).send("404 route not found!");
});

app.listen(process.env.API_PORT, () => {
  console.log(`server running on ${process.env.API_PORT} PORT`);
});
