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

module.exports = { validateFormField };
