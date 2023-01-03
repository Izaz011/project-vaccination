const mongoose=require("mongoose")

const isEmpty=function (value){
    if(typeof(value)==="undefined"|| typeof(value)==="null"|| typeof(value)===""){
        return false
    }

    if(typeof(value)==="string"&& value.trim().length==0){
        return false
    }
    return true
}

const isValidBody=function(value){
    if(Object.keys(value).length==0){
        return false
    }
    return true
}

const isValidName=function(value){
    const nameRegex = /^[a-zA-Z ]+$/;
    if(nameRegex.test(value)){
        return true
    }
}

const isValidPhone=function(value){
    let phnNum = /^[0]?[6789]\d{9}$/
    if(phnNum.test(value)){
        return true
    } 
}

    const isValidPincode=function(value){  
        const reg = /^[0-9]{6}$/
        if(reg.test(value)){
            return true
        }
    }

    
const isValidAge = function isInteger(value) {
    if(isNaN(Number(value))){
        return false
    }
    if (value < 10) return false
    return true
}

const isValidQuantity=function isInteger(value){
    if(value<1){
        return false
    }
    if(isNaN(Number(value))){
        return false
    }
    if(value>=1){
        return true
    }
}


const isValidSlot = function (slot) {
    return [10, 10.30, 11, 11.30, 12, 12.30, 1, 1.30, 2, 2.30, 3, 3.30, 4, 4.30].includes(slot);
}


const isVaildPassword = function (value) {
    const regex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,15}$/;
    if(regex.test(value)){
        return true
    }
}

const isValidAdhaar = function (value) {
    const regex = /^[2-9]{1}[0-9]{3}[0-9]{4}[0-9]{4}$/
    if(regex.test(value)){
        return true
    }
}

module.exports = { isVaildPassword, isValidAdhaar, isEmpty, isValidName, isValidSlot, isValidPhone, isValidBody, isValidPincode, isValidAge, isValidQuantity }