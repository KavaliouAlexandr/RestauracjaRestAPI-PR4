import express from "express";
import { Request, Response } from "express";


const mongoose = require("mongoose");

const app = express();

const PORT = 3000;

const dbURI =
  "";

mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((result:any) => console.log("Connected to Mongoose: " + app.listen(3000)))
    .catch((err:any) => console.log("Failed to connect to Mongoose: " + err))






app.get("/", function (req: Request, res: Response) {
  res.send("Ty jesteś w API!");
});


