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

  for (const field of fields) {
    if (!fieldModelMap[field.fieldName]) {
      return {
        success: false,
        message: `FieldName ${field.fieldName} is invalid for the form.`,
      };
    }
  }

  return {
    success: true,
    message: "All field names are valid.",
  };
}

function validateFormField(type, data) {
  switch (type) {
    case VALID_EMAIL:
      return isValidEmail(data);
    case SHORT_TEXT:
      return isShortText(data);
    case PHONE_NUMBER:
      return isPhoneNumber(data);
    default:
      return false;
  }
}

function isShortText(data) {
  const success = typeof data === "string" && data.length < 20;
  return {
    success,
    message: !success ? "Invalid string type or length more than 20" : "",
  };
}
function isValidEmail(data) {
  const success = data.match(/\S+@\S+\.\S+/);
  return {
    success,
    message: !success ? "Invalid email" : "",
  };
}
function isPhoneNumber(data) {
  const success = Number.isInteger(data);
  return {
    success,
    message: !success ? "Invalid string type or length more than 20" : "",
  };
}

module.exports = { validateFields };
