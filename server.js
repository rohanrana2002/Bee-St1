const express = require('express');
const { mongoose } = require('mongoose');
const app = express();
app.use(express.json());
const dB = require('./Middlewares/dB');
const product = require('./model/productschema');
const review = require('./model/reviewSchema')
dB.connectToDb();

const routes = require("./Routes/Productroutes");
app.use("/",routes);


app.listen(3000,()=>{
    console.log(`server is statred on 3000`);
})


