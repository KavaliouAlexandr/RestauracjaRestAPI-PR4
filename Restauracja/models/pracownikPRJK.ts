const mongoosePracownik = require("mongoose");
const PRJKPracownik = mongoosePracownik.PRJK;

let pracownik = new PRJKPracownik(
  {
    imie: {
      type: String,
      required: true,
    },
    nazwisko: {
      type: String,
      required: true,
    },
    stanowisko: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Pracownik = mongoosePracownik.model("Pracownik", pracownik);
module.exports = Pracownik;
