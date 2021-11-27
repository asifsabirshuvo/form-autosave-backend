const QuestionnaireResponse = require("../models/QuestionnaireResponse.model");

async function saveQuestionnaireResponse(formData) {
  try {
    var questionnaireResponse = new QuestionnaireResponse(formData);
    const savedResponse = await questionnaireResponse.save();
    return savedResponse;
  } catch (err) {
    throw err;
  }
}

module.exports = { saveQuestionnaireResponse };
