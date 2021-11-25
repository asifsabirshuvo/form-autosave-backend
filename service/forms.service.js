const Questionnaire = require("./../models/Questionnaire");

async function getAllForms() {
  try {
    const questionnaires = await Questionnaire.find({}, ["formName"]);
    return questionnaires;
  } catch (err) {
    throw err;
  }
}

async function getFormById(id) {
  try {
    const questionnaires = await Questionnaire.find({ _id: id }, [
      "formName",
      "formElements",
    ]);
    return questionnaires;
  } catch (err) {
    throw err;
  }
}

module.exports = { getAllForms, getFormById };
