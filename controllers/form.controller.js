const formService = require("./../service/forms.service");
async function getForms(req, res) {
  try {
    const forms = await formService.getAllForms();
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

module.exports = { getForms };
