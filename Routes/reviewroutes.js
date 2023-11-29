const express=require("express");
const app = express();
const router=express.Router();
const userController = require('../Controller/userController');
const userdatacontrol = require('../Controller/review')



app.use('/review/register',userController.register);
app.use('/review/delete',userdatacontrol.deletedata);
app.use('/review/update',userdatacontrol.updatedata);
app.use('/review/getdata',userdatacontrol.getdata);
app.use("",router)   
module.exports=app;
