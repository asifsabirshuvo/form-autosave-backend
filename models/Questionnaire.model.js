const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuestionnaireSchema = new Schema({
  _id: {
    type: Schema.ObjectId,
    auto: true,
  },
  formName: {
    type: String,
    required: true,
  },
  formElements: [
    {
      fieldName: {
        type: String,
        required: true,
      },
      constraint: {
        type: String,
        required: true,
        enum: ["VALID_EMAIL", "SHORT_TEXT", "PHONE_NUMBER"],
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Questionnaire", QuestionnaireSchema);
