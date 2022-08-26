const mongooseZamowienie = require("mongoose");
const PRJKZamowienie = mongooseZamowienie.PRJK;

let zamowieniePRJK = new PRJKZamowienie(
  {
    pracownik:[
      {
        type: PRJKZamowienie.Types.ObjectId,
        ref: "Pracownik",
        required: true,
      },
   ],
    pozycje:[
      {
        type: PRJKZamowienie.Types.Mixed,
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
        type: PRJKZamowienie.Types.ObjectId,
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

const Zamowienie = mongooseZamowienie.model("Zamowienie", zamowieniePRJK);
module.exports = Zamowienie;

