const mongoosePracownik = require("mongoose");
const SchemaPracownik = mongoosePracownik.Schema;

let pracownikSchema = new SchemaPracownik(
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

const Pracownik = mongoosePracownik.model("Pracownik", pracownikSchema);
module.exports = Pracownik;
