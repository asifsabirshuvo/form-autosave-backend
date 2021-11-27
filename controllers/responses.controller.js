const responseService = require("./../service/responses.service");

async function submitForm(req, res) {
  try {
    console.log(req.body);
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: error.message,
    });
  }
}

module.exports = { submitForm };
