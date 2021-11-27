const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuestionnaireResponseSchema = new Schema({
  _id: {
    type: Schema.ObjectId,
    auto: true,
  },
  form: { type: mongoose.Schema.Types.ObjectId, ref: "Questionnaire" },
  formElements: [
    {
      fieldName: {
        type: String,
        required: true,
      },
      value: {
        type: String,
        required: true,
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

module.exports = mongoose.model(
  "QuestionnaireResponse",
  QuestionnaireResponseSchema
);
