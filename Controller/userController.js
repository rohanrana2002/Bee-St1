const express = require ('express');
const product =require ('../model/productschema');
const userservice = require('../Services/productservices')


exports.register = async(req,res)=>{
    try{
        const inputdata=req.body;
        const email = inputdata.email;
        console.log('name',names);
        const activeuser = await userservice.findbyEmail(email);
        if(activeuser){
            res.status(500).json({message : "name already exist"});
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