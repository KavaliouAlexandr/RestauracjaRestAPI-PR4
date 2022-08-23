const mongooseProdukt = require("mongoose");
const PRJKProdukt = mongooseProdukt.PRJK;

let produkt = new PRJKProdukt(
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

const Produkt = mongooseProdukt.model("Produkt", produkt);
module.exports = Produkt;
