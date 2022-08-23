import express from "express";
import { Request, Response } from "express";
import bodyParser from "body-parser";
import { appendFile } from "fs";

const Danie = require("../models/daniePRJK");
const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  Danie.find()
    .then((result: any) => {
      res.send(result);
    })
    .catch((err: any) => {
      res.send(err);
    });
});

router.get("/getSingle/:id", (req: Request, res: Response) => {
  Danie.findById(req.params.id)
    .then((result: any) => {
      res.send(result);
    })
    .catch((err: any) => {
      res.send("Takiego dania nie mamy w karcie");
    });
});

router.post("/addNew", (req: Request, res: Response) => {
  let danie = new Danie({
    nazwa: req.body.nazwa,
    cena: req.body.cena,
    kategoria: req.body.kategoria,
  });

  danie
    .save()
    .then((result: any) => {
      res.send(result);
    })
    .catch((error: any) => {
      res.send(
        "Błędne dane potrawy, proszę sprawdzić format wprowadzonych danych"
      );
    });
});

router.put("/updateSingle/:id", (req: Request, res: Response) => {
  Danie.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((result: any) => {
      res.send(result);
    })
    .catch((error: any) => {
      res.send("Nie mamy Dania o takim id w bazie");
    });
});

router.delete("/deleteSingle/:id", (req: Request, res: Response) => {
  Danie.findByIdAndRemove(req.params.id)
    .then((result: any) => {
      res.send(result);
    })
    .catch((err: any) => {
      res.send(
        "Potrawy o takim id nie ma w bazie lub została wcześniej usunięta"
      );
    });
});

export default router;
