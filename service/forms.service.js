const Questionnaire = require("../models/Questionnaire.model");

async function insertFormsBatch(forms) {
  try {
    const questionnaires = await Questionnaire.insertMany(forms);
    return questionnaires;
  } catch (err) {
    throw err;
  }
}

async function getAllForms(page, limit) {
  try {
    let query = {};
    query.skip = limit * (page - 1);
    query.limit = limit;
    query.sort = { _id: -1 };
    const questionnaires = await Questionnaire.find({}, ["formName"], query);
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
