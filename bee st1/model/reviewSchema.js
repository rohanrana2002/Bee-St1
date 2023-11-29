const mongoose = require('mongoose')

const review= new mongoose.Schema({
  content:{
    type:String,
    required:true,
    maxlength:500,
  },
  Rating:{
    type:Number,
    required:true,
    minvalue:0,
    maxvalue:5,
  },
  Author:{
    type:String,
    required:true,
  },
  created:{
    type:Date
    
  }
  

})

module.exports = mongoose.model("Reviews",review)