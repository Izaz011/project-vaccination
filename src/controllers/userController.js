const {create,findOne}=require("../models/userModel")
const vaccineModel=require("../models/vaccineModel")
const {hash}=require("bcrypt")
const jwt=require("jsonwebtoken")
const { isValidObjectId } = require("mongoose")

const { isVaildPassword, isValidAdhaar, isEmpty, isValidName, isValidSlot, isValidPhone, isValidBody, isValidPincode, isValidAge, isValidQuantity }=require("../validators/validation")
const { rmSync } = require("fs")

const createUser=async function(req,res){
    const data=req.body
    const {fName,lName,phoneNumber,age,pincode,adhaarNo,password}=data

    if(!isValidBody(data)){
        return res.status(400).send({sṭatus:false,msg:"please provide body"})
    }

    if(!fName){
        return res.status(400).send({sṭatus:false,msg:"please provide first name"})  
    }
    if(!isEmpty(fName)||!isValidName(fName)){
        return res.status(400).send({sṭatus:false,msg:"please provide valid first name"})
    }
    if(!lName){
        return res.status(400).send({sṭatus:false,msg:"please provide last name"})  
    }
    if(!isEmpty(lName)||!isValidName(lName)){
        return res.status(400).send({sṭatus:false,msg:"please provide valid last name"})
    }
    if(!phoneNumber){
            return res.status(400).send({sṭatus:false,msg:"please provide phone number"})
    }
    if(!isValidPhone(phoneNumber)){
        return res.status(400).send({sṭatus:false,msg:"please provide valid phone number"}) 
    }
    const alreadyUsedPh=await findOne({phoneNumber:phoneNumber})
    if(alreadyUsedPh){
        return res.status(400).send({sṭatus:false,msg:"this number is already used"})
    }
    if(!age){
        return res.status(400).send({sṭatus:false,msg:"age field is mandatory"}) 
    }
    if(!isValidAge(age)){
        return res.status(400).send({sṭatus:false,msg:"please provide valid age"})
    }
    if(!pincode){
        return res.status(400).send({sṭatus:false,msg:"please provide pincode"})
    }
    if(!isValidPincode(pincode)){
        return res.status(400).send({sṭatus:false,msg:"please provide valid pincode"})
    }
    if(!adhaarNo){
        return res.status(400).send({sṭatus:false,msg:"please provide adhaar number"})
    }
    if(!isValidAdhaar(adhaarNo)){
        return res.status(400).send({sṭatus:false,msg:"please provide valid adhaar number"})
    }
    if(!password){
        return res.status(400).send({sṭatus:false,msg:"please provide password"}) 
    }
    if(!isVaildPassword(password)){
        return res.status(400).send({sṭatus:false,msg:"please valid provide password"}) 
    }
    data.password = await hash(password, 1)

    const userDetails=await create(data)

    return res.status(201).send({status:true,msg:"user created successfully",data:userDetails})
}


