const responseService = require("./../service/responses.service");

async function submitForm(req, res) {
  try {
    const forms = await responseService.saveQuestionnaireResponse();
    return res.send({
      success: true,
      data: forms,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: error.message,
    });
  }
}

module.exports = { submitForm };
