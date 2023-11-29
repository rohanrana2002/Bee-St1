const moongose = require('mongoose')
const user = require("../model/productschema")

exports.findbyEmail= async(email)=>{
    return await user.findOne({'name':names}).select('_id').lean()
}
exports.createuser = async(data)=>{
    return await user.create(data);
}