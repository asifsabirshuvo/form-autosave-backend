const express = require("express");
const formsRoute = express.Router();
const formController = require("../controllers/form.controller");

formsRoute.get("/", formController.getForms);
formsRoute.get("/:id", formController.getSingleForm);
formsRoute.post("/generate-sample", formController.generateForm);

module.exports = formsRoute;
