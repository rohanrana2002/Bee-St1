const mongoose = require('mongoose')

const product= new mongoose.Schema({
  name:{
    type:String,
    required:true,
    maxlength:255,
  },
  Description:{
    type:String,
    required:true,
    maxlength:1000,
  },
  Price:{
    type:Number,
    required:true,
    minvalue:0,
  },
  Category:{
    type: String,
    required:true,
  },
  reviews:{
    type:String,
    required:false
  }
})

module.exports = mongoose.model("Products",product)