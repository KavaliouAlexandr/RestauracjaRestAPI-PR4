import express from "express";
import { Request, Response } from "express";
import bodyParser from "body-parser";
import { appendFile } from "fs";

const Rezerwacja = require("../models/rezerwacjaPRJK");
const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  Rezerwacja.find()
    .then((result: any) => {
      res.send(result);
    })
    .catch((err: any) => {
      res.send(err);
    });
});

router.get("/getSingle/:id", (req: Request, res: Response) => {
  Rezerwacja.findById(req.params.id)
    .then((result: any) => {
      res.send(result);
    })
    .catch((err: any) => {
      res.send("Nie mamy rezerwacji o takim id w bazie");
    });
});

router.post("/addNew", (req: Request, res: Response) => {
  let rezerwacja = new Rezerwacja({
    stolik: req.body.stolik,
    start: req.body.start,
    koniec: req.body.koniec,
    klient: req.body.klient,
  });

  rezerwacja
    .save()
    .then((result: any) => {
      res.send(result);
    })
    .catch((error: any) => {
      res.send("Błędne dane rezerwacji, stolik jest już zajęty" + error);
    });
});

router.put("/updateSingle/:id", (req: Request, res: Response) => {
  Rezerwacja.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((result: any) => {
      res.send(result);
    })
    .catch((error: any) => {
      res.send("Nie mamy Rezerwacji o takim id w bazie");
    });
});

router.delete("/deleteSingle/:id", (req: Request, res: Response) => {
  Rezerwacja.findByIdAndRemove(req.params.id)
    .then((result: any) => {
      res.send(result);
    })
    .catch((err: any) => {
      res.send(
        "Rezerwacji o takim id nie ma w bazie lub została wcześniej usunięta"
      );
    });
});

export default router;
