const Questionnaire = require("../models/Questionnaire.model");

async function insertFormsBatch(forms) {
  try {
    const questionnaires = await Questionnaire.insertMany(forms);
    return questionnaires;
  } catch (err) {
    throw err;
  }
}

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
    const questionnaires = await Questionnaire.findOne({ _id: id }, [
      "formName",
      "formElements",
    ]);
    return questionnaires;
  } catch (err) {
    throw err;
  }
}

module.exports = { getAllForms, getFormById, insertFormsBatch };
