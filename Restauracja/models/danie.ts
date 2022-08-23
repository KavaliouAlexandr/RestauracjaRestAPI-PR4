const mongooseDanie = require("mongoose");
const PRJKDanie = mongooseDanie.PRJK;

let danie = new PRJKDanie(
  {
    nazwa: {
      type: String,
      required: true,
    },
    cena: {
      type: Number,
      required: true,
    },
    kategoria: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Danie = mongooseDanie.model("Danie", danie);
module.exports = Danie;
