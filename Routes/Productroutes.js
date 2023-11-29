const express=require("express");
const app = express();
const router=express.Router();
const userController = require('../Controller/userController');
const userdatacontrol = require('../Controller/Product')



app.use('/product/register',userController.register);
app.use('/product/delete',userdatacontrol.deletedata);
app.use('/product/update',userdatacontrol.updatedata);
app.use('/product/getdata',userdatacontrol.getdata);
app.use("",router)   
module.exports=app;


