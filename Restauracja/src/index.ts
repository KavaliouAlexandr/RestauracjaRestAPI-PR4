import express from "express";
import { Request, Response } from "express";
import bodyParser from "body-parser";
import stolikiObj from "../obj/stoliki"
import restauracjeObj from "../obj/restauracje"
import pracownikObj from "../obj/pracownik"
import danieObj from "../obj/danie"
import rezerwacjaObj from "../obj/rezerwacja"
import produktObj from "../obj/produkty"
import zamowienieObj from "../obj/zamowienie"

const mongoose = require("mongoose");

const app = express();

const PORT = 3000;

const dbURI =
  "mongodb+srv://Ebator20000:Gq5N7cPn7aHAJsf@restauracjaprjk.y5uf7ex.mongodb.net/restauracjaprjk?retryWrites=true&w=majority";

mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((result:any) => console.log("Connected to Mongoose: " + app.listen(3000)))
    .catch((err:any) => console.log("Failed to connect to Mongoose: " + err))

    app.use(bodyParser.json());

    app.use("/stoliki", stolikiObj);
    app.use("/restauracje", restauracjeObj);
    app.use("/pracownicy", pracownikObj);
    app.use("/dania", danieObj);
    app.use("/rezerwacje", rezerwacjaObj);
    app.use("/produkty", produktObj);
    app.use("/zamowienia", zamowienieObj);




app.get("/", function (req: Request, res: Response) {
  res.send("Cześć, Jesteś w api restauracji!");
});


