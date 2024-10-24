import React from 'react'

const validate = (product) => {
    const newErrors = {};
    if(!product.name){
        newErrors.name = "Numele produsului este obligatoriu";
    }
    if(!product.price){
        newErrors.price = "Pretul produsului este obligatoriu";
    }
    if(!product.description){
        newErrors.description = "Descrierea produsului este obligatorie";
    }
    return newErrors;
}

export default validate
