const mongooseRezerwacja = require("mongoose");
const PRJKRezerwacja = mongooseRezerwacja.PRJK;

let rezerwacjaPRJK = new PRJKRezerwacja(
  {
    stolik: [
      {
        type: PRJKRezerwacja.Types.ObjectId,
        ref: "Stolik",
        required: true,
      },
    ],
    
    start: {
      type: Date,
      required: true,
      
    },
    koniec: {
      type: Date,
      required: true,
      
    },
    klient: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Rezerwacja = mongooseRezerwacja.model("Rezerwacja", rezerwacjaPRJK);
module.exports = Rezerwacja;
