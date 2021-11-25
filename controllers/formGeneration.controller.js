const Questionnaire = require("./../models/Questionnaire");

async function generateForm(req, res) {
  const userQuestionnaire = new Questionnaire({
    formName: "Name email form",
    formElements: [
      {
        fieldName: "Full name",
        constraint: "SHORT_TEXT",
      },
      {
        fieldName: "Email",
        constraint: "VALID_EMAIL",
      },
    ],
  });
  const addressQuestionnaire = new Questionnaire({
    formName: "Name phone form",
    formElements: [
      {
        fieldName: "Full name",
        constraint: "SHORT_TEXT",
      },
      {
        fieldName: "Phone number",
        constraint: "PHONE_NUMBER",
      },
    ],
  });
  try {
    await userQuestionnaire.save();
    await addressQuestionnaire.save();
    return res.send({
      status: 201,
      success: true,
      message: "successfully inserted form!",
    });
  } catch (err) {
    console.log(err);
    return res.send({
      status: 500,
      success: true,
      message: "form generation failure!",
    });
  }
}

module.exports = { generateForm };
