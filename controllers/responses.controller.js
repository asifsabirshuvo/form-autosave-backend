const responseService = require("./../service/responses.service");
const formService = require("./../service/forms.service");
const { validateFields } = require("./../utils/fieldConstraintVerification");

async function submitForm(req, res) {
  try {
    const { form, formElements } = req.body;
    const formFormat = await formService.getFormById(form);
    const fieldValidationResults = validateFields(
      formFormat.formElements,
      formElements
    );

    if (!fieldValidationResults.success) {
      return res.status(400).send(fieldValidationResults);
    }

    const responseSubmitted = await responseService.saveQuestionnaireResponse(
      req.body
    );
    return res.status(201).send({
      success: true,
      message: "successfully saved form response",
      data: responseSubmitted,
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
