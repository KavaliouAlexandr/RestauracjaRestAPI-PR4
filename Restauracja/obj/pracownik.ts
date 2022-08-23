import express from "express";
import { Request, Response } from "express";
import bodyParser from "body-parser";
import { appendFile } from "fs";

const Pracownik = require("../models/pracownikPRJK");
const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  Pracownik.find()
    .then((result: any) => {
      res.send(result);
    })
    .catch((err: any) => {
      res.send(err);
    });
});

router.get("/getSingle/:id", (req: Request, res: Response) => {
  Pracownik.findById(req.params.id)
    .then((result: any) => {
      res.send(result);
    })
    .catch((err: any) => {
      res.send("Pracownik o takim id u nas nie pracuje");
    });
});

router.post("/addNew", (req: Request, res: Response) => {
  let pracownik = new Pracownik({
    imie: req.body.imie,
    nazwisko: req.body.nazwisko,
    stanowisko: req.body.stanowisko,
  });

  pracownik
    .save()
    .then((result: any) => {
      res.send(result);
    })
    .catch((error: any) => {
      res.send(
        "Błędne dane pracownika, proszę sprawdzić format wprowadzonych danych"
      );
    });
});

router.put("/updateSingle/:id", (req: Request, res: Response) => {
  Pracownik.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((result: any) => {
      res.send(result);
    })
    .catch((error: any) => {
      res.send("Nie mamy pracownika o takim id w bazie");
    });
});

router.delete("/deleteSingle/:id", (req: Request, res: Response) => {
  Pracownik.findByIdAndRemove(req.params.id)
    .then((result: any) => {
      res.send(result);
    })
    .catch((err: any) => {
      res.send(
        "pracownika o takim id nie ma w bazie lub został wcześniej usunięty"
      );
    });
});

export default router;
