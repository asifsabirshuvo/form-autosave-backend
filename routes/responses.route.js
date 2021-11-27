const express = require("express");
const responsesRoute = express.Router();
const responseController = require("../controllers/responses.controller");
const {
  submitFormValidator,
  validate,
} = require("./../validators/submitForm.validator");

responsesRoute.post(
  "/",
  submitFormValidator(),
  validate,
  responseController.submitForm
);

module.exports = responsesRoute;
