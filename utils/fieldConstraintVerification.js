/*
  dynamic field suggestions for the users
  everytime we add a new input option we can hardcode it here.
  Ingored keeping them in another schema for time constraints.
*/
const formFieldValidationMap = {
  VALID_EMAIL: isValidEmail,
  SHORT_TEXT: isShortText,
  PHONE_NUMBER: isPhoneNumber,
};

function validateFields(fieldModel, fields) {
  let fieldModelMap = {};
  for (const fieldElement of fieldModel) {
    fieldModelMap[fieldElement.fieldName] = fieldElement.constraint;
  }

  //checking malformed field names
  for (const field of fields) {
    if (!fieldModelMap[field.fieldName]) {
      return {
        success: false,
        message: `FieldName ${field.fieldName} is invalid for the form.`,
      };
    }
  }

  //checking field constraints
  for (const field of fields) {
    const valueValidation = formFieldValidationMap[
      fieldModelMap[field.fieldName]
    ](field.value);

    if (!valueValidation.success) {
      return valueValidation;
    }
  }

  return {
    success: true,
    message: "All field names and data are valid.",
  };
}

function isShortText(data) {
  const success = typeof data === "string" && data.length < 20;
  return {
    success,
    message: !success ? "Invalid string type or length more than 20" : "",
  };
}
function isValidEmail(data) {
  const success = data.match(/\S+@\S+\.\S+/) !== null;
  return {
    success,
    message: !success ? "Invalid email" : "",
  };
}
function isPhoneNumber(data) {
  const success = Number.isInteger(data);
  return {
    success,
    message: !success ? "Invalid phone number" : "",
  };
}

module.exports = { validateFields };
