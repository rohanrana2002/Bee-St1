const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();
app.use(express.json());
const dB = require('./Middlewares/dB');
const product = require('./model/product');
dB.connectToDb();

const routes = require("./Routes/userroutes");
app.use("/",routes);


app.listen(3000,()=>{
    console.log(`server is statred on 3000`);
})


