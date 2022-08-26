const mongooseStolik = require("mongoose");
const PRJKStolik = mongooseStolik.PRJK;

export let stolikPRJK = new PRJKStolik(
  {
    nazwa: {
      type: String,
      required: true,
    },
    iloscOsob: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ["Wolny", "Zajety", "Niedostepny"],
      default: "Wolny",
    },
  },
  { timestamps: true }
);

const Stolik = mongooseStolik.model("Stolik", stolikPRJK);
module.exports = Stolik;
