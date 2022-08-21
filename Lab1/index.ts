const express = require('express');
const app = express();
app.get('/id',function(req,res){
    res.send('Hello world');
    
})
app.listen(3000);