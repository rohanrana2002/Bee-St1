const express = require ('express');
const user =require ('../model/usermodule');
const userservice = require('../Services/productservices')


exports.register = async(req,res)=>{
    try{
        const inputdata=req.body;
        const email = inputdata.email;
        console.log('email',email);
        const activeuser = await userservice.findbyEmail(email);
        if(activeuser){
            res.status(500).json({message : "user already exist"});
        }
        else{
            const createdata = await userservice.createuser(inputdata)
            res.status(200).json({
                message:'success', data: createdata
        })

        }
    }
    catch(error){
        res.status(500).json({message:"fail"})
    }
    
}