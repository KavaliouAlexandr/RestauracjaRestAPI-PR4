import express from "express";
import { Request, Response } from "express";
import bodyParser from "body-parser";
import { appendFile } from "fs";

const Zamowienie = require("../models/zamowieniePRJK");
const Danie = require("../models/daniePRJK");
const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  let a = Zamowienie.find({ kwota: 0 });
 
    Zamowienie.aggregate([
      {
        $addFields: {
          kwota: { $round: [{ $sum: "$pozycje.cena" }, 2] },
        },
      },
    ])
      .then((result: any) => {
        res.send(result);
      })
      .catch((err: any) => {
        res.send(err);
      });
  
});

router.get("/getSingle/:id", (req: Request, res: Response) => {
  Zamowienie.findById(req.params.id)
    .then((result: any) => {
      res.send(result);
    })
    .catch((err: any) => {
      res.send("Nie mamy zamowienia o takim id w bazie");
    });
});

router.get("/oblozenieStolikow", (req: Request, res: Response) => {
  Zamowienie.aggregate([
    {
      $group: {
        _id: "$stolik",
        iloscZamowien: { $sum: 1 },
      },
    },
  ]).then((result: any) => {
    res.send(result);
  }).catch((err: any) => {
    res.send(err);
  });;
});

router.post("/addNew", (req: Request, res: Response) => {
  let zamowienie = new Zamowienie({
    pracownik: req.body.pracownik,
    pozycje: req.body.pozycje,
    status: req.body.status,
    stolik: req.body.stolik,
    kwota: req.body.kwota,
  });

  zamowienie
    .save()
    .then((result: any) => {
      res.send(result);
    })
    .catch((error: any) => {
      res.send("Błędne dane zamowienia," + error);
    });
});

router.put("/updateSingle/:id", (req: Request, res: Response) => {
  Zamowienie.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((result: any) => {
      res.send(result);
    })
    .catch((error: any) => {
      res.send("Nie mamy Zamowienia o takim id w bazie");
    });
});

router.delete("/deleteSingle/:id", (req: Request, res: Response) => {
  Zamowienie.findByIdAndRemove(req.params.id)
    .then((result: any) => {
      res.send(result);
    })
    .catch((err: any) => {
      res.send(
        "Zamowienia o takim id nie ma w bazie lub została wcześniej usunięta"
      );
    });
});

export default router;
