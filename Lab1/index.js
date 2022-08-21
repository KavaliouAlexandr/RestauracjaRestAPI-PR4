const { query } = require('express');
var express = require('express');
var app = express();
app.get('/add', function(req, res){
    var a = Number(req.query.num1);
    var b = Number(req.query.num2);
    
    var resuslt = a+b;
    res.send('wynik dodawania: ' + resuslt);
  });
  app.get('/odejmowanie', function(req, res){
    var a = Number(req.query.num1);
    var b = Number(req.query.num2);
    
    var resuslt = a-b;
    res.send('wynik dodawania: ' + resuslt);
  });
  app.get('/mnozenie', function(req, res){
    var a = Number(req.query.num1);
    var b = Number(req.query.num2);
    
    var resuslt = a*b;
    res.send('wynik dodawania: ' + resuslt);
  });
  app.get('/dzielenie', function(req, res){
    var a = Number(req.query.num1);
    var b = Number(req.query.num2);
    
    var resuslt = a/b;
    res.send('wynik dodawania: ' + resuslt);
  });
app.listen(3000);
