const mongooseRestauracja = require("mongoose");
const SchemaRestauracja = mongooseRestauracja.Schema;

let restauracjaSchema = new SchemaRestauracja(
  {
    nazwa: {
      type: String,
      required: true,
    },
    adres: {
      type: String,
      required: true,
    },
    telefon: {
      type: String,
      required: true,
    },
    nip: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    www: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Restauracja = mongooseRestauracja.model("Restauracja", restauracjaSchema);
module.exports = Restauracja;
