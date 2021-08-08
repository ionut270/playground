console.out = (str)=>{ console.log(`[${Date()}] ${str}`) }

// Library to import .env file
require('dotenv');

// App imports
const express       = require('express')
const cors          = require("cors");
const app           = require("express")();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use('/',require('./router'));

app.listen(8080,(err)=>{
    if(err){ console.error(err); }
    else     console.out(`Server up and running on port ${8080}`)
})

module.exports = app;