const mongoose = require("mongoose");
require("dotenv").config();
mongoose.connect(
  process.env.DB_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) console.error(err);
    else console.log("Connected to the mongodb!");
  }
);

module.exports = {mongoose};