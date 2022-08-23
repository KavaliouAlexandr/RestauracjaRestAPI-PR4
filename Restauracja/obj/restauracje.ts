import express from "express";
import { Request, Response } from "express";
import bodyParser from "body-parser";
import { appendFile } from "fs";

const Restauracja = require("../models/restauracjaPRJK");
const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  Restauracja.find()
    .then((result: any) => {
      res.send(result);
    })
    .catch((err: any) => {
      res.send(err);
    });
});

router.get("/getSingle/:id", (req: Request, res: Response) => {
  Restauracja.findById(req.params.id)
    .then((result: any) => {
      res.send(result);
    })
    .catch((err: any) => {
      res.send("Nie mamy takiej restauracji");
    });
});

router.post("/addNew", (req: Request, res: Response) => {
  let restauracja = new Restauracja({
    nazwa: req.body.nazwa,
    adres: req.body.adres,
    telefon: req.body.telefon,
    nip: req.body.nip,
    email: req.body.email,
    www: req.body.www,
  });

  restauracja
    .save()
    .then((result: any) => {
      res.send(result);
    })
    .catch((error: any) => {
      res.send(
        "Błędne dane Restauracji"
      );
    });
});

router.put("/updateSingle/:id", (req: Request, res: Response) => {
  Restauracja.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((result: any) => {
      res.send(result);
    })
    .catch((error: any) => {
      res.send("Nie mamy Restauracji o takim id w bazie");
    });
});

router.delete("/deleteSingle/:id", (req: Request, res: Response) => {
  Restauracja.findByIdAndRemove(req.params.id)
    .then((result: any) => {
      res.send(result);
    })
    .catch((err: any) => {
      res.send(
        "Restauracji o takim id nie ma w bazie lub została wcześniej usunięta"
      );
    });
});
export default router;
