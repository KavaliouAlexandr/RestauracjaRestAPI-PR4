const mongooseStolik = require("mongoose");
const SchemaStolik = mongooseStolik.Schema

export let stolikSchema = new SchemaStolik(
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

const Stolik = mongooseStolik.model("Stolik", stolikSchema);
module.exports = Stolik;
