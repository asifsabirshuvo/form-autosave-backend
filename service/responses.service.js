const QuestionnaireResponse = require("../models/QuestionnaireResponse.model");

async function saveQuestionnaireResponse(formData) {
  try {
    console.log(formData);
    var questionnaireResponse = new QuestionnaireResponse(formData);
    const savedResponse = await questionnaireResponse.save();
    console.log(savedResponse);
  } catch (err) {
    throw err;
  }
}

module.exports = { saveQuestionnaireResponse };
