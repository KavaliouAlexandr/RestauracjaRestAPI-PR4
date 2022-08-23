import express from "express";
import { Request, Response } from "express";
import bodyParser from "body-parser";
import { appendFile } from "fs";

const Produkt = require("../models/produktPRJK");
const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  Produkt.find()
    .then((result: any) => {
      res.send(result);
    })
    .catch((err: any) => {
      res.send(err);
    });
});

router.get("/getSingle/:id", (req: Request, res: Response) => {
  Produkt.findById(req.params.id)
    .then((result: any) => {
      res.send(result);
    })
    .catch((err: any) => {
      res.send("Takiego produktu nie mamy w magazynie");
    });
});

router.get("/sort",(req: Request, res: Response) =>{
  Produkt.find()
    .sort('cena')
    .then((result: any) => {
      res.send(result);
    })
    .catch((err: any) => {
      res.send("Nie można posortować produktów"+err);
    });
})

router.post("/addNew", (req: Request, res: Response) => {
  let produkt = new Produkt({
    nazwa: req.body.nazwa,
    cena: req.body.cena,
    ilosc: req.body.ilosc,
    jednostkaMiary: req.body.jednostkaMiary,
  });

  produkt
    .save()
    .then((result: any) => {
      res.send(result);
    })
    .catch((error: any) => {
      res.send(
        "Błędne dane produktu, proszę sprawdzić format wprowadzonych danych" + error
      );
    });
});

router.put("/updateSingle/:id", (req: Request, res: Response) => {
  Produkt.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((result: any) => {
      res.send(result);
    })
    .catch((error: any) => {
      res.send("Nie mamy produktu, o takim id w bazie");
    });
});

router.delete("/deleteSingle/:id", (req: Request, res: Response) => {
  Produkt.findByIdAndRemove(req.params.id)
    .then((result: any) => {
      res.send(result);
    })
    .catch((err: any) => {
      res.send(
        "Produtku o takim id nie ma w bazie lub został wcześniej usunięty"
      );
    });
});

export default router;
