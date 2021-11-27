const express = require("express");
const responsesRoute = express.Router();
const formController = require("../controllers/responses.controller");

responsesRoute.post("/", formController.submitForm);

module.exports = responsesRoute;
