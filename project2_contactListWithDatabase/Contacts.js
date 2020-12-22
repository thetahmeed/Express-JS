





// create schema // it's just a shape
const { Schema, model } = require('mongoose')

const contactSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 12                               // 'min' & 'max' for 'number' type
    },
    phone: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    }
})

// create model // it's will be the 'document' of the collection // model name should this file name
const Contacts = model('Contacts', contactSchema)


// export the model
module.exports = Contacts
