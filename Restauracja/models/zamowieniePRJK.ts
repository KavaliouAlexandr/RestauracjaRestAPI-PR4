const mongooseZamowienie = require("mongoose");
const SchemaZamowienie = mongooseZamowienie.Schema;

let zamowienieSchema = new SchemaZamowienie(
  {
    pracownik:[
      {
        type: SchemaZamowienie.Types.ObjectId,
        ref: "Pracownik",
        required: true,
      },
   ],
    pozycje:[
      {
        type: SchemaZamowienie.Types.Mixed,
        ref: "Danie",
        required: true,
      },
    ],
    status: {
      type: String,
      enum: ["zlozone", "w realizacji", "zrealizowane", "rachunek"],
      required: true,
    },
    stolik:[ 
      {
        type: SchemaZamowienie.Types.ObjectId,
        ref: "Stolik",
        required: true,
      },
    ],
    kwota: {
      type: Number,
      default: 0,
     
    },
  },
  { timestamps: true }
);

const Zamowienie = mongooseZamowienie.model("Zamowienie", zamowienieSchema);
module.exports = Zamowienie;

