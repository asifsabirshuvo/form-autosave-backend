const { body, validationResult } = require("express-validator");

const submitFormValidator = () => {
  return [
    body("form").not().isEmpty(),
    body("formElements").not().isEmpty(),
    body("formElements.*.fieldName").not().isEmpty(),
    body("formElements.*.value").not().isEmpty(),
  ];
};

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  const extractedErrors = [];
  errors.array().map((err) => extractedErrors.push({ [err.param]: err.msg }));

  return res.status(400).json({
    errors: extractedErrors,
  });
};

module.exports = {
  submitFormValidator,
  validate,
};
