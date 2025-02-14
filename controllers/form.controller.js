const formService = require("./../service/forms.service");
const sampleForms = require("./../samples/formSamples.json");

async function generateForm(req, res) {
  try {
    await formService.insertFormsBatch(sampleForms.samples);
    return res.send({
      status: 201,
      success: true,
      message: "successfully inserted form samples!",
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

async function getForms(req, res) {
  try {
    const page = parseInt(req.query.page ? req.query.page : 1);
    const limit = parseInt(
      req.query.limit ? (req.query.limit <= 10 ? req.query.limit : 10) : 10
    );

    const forms = await formService.getAllForms(page, limit);
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

async function getSingleForm(req, res) {
  try {
    const form = await formService.getFormById(req.params.id);
    return res.send({
      success: true,
      data: form,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: error.message,
    });
  }
}

module.exports = { getForms, getSingleForm, generateForm };
