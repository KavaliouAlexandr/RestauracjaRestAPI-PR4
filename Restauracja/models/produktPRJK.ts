const mongooseProdukt = require("mongoose");
const SchemaProdukt = mongooseProdukt.Schema;

let produktSchema = new SchemaProdukt(
  {
    nazwa: {
      type: String,
      required: true,
    },
    cena: {
      type: Number,
      required: true,
    },
    ilosc: {
      type: Number,
      required: true,
    },
    jednostkaMiary: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Produkt = mongooseProdukt.model("Produkt", produktSchema);
module.exports = Produkt;
