const Questionnaire = require("../models/Questionnaire.model");

async function saveQuestionnaireResponse(forms) {
  try {
    const questionnaires = await Questionnaire.insertMany(forms);
    return questionnaires;
  } catch (err) {
    throw err;
  }
}

module.exports = { saveQuestionnaireResponse };
