





const mApp2 = require('express').Router()

const {
    createContact, 
    getContactById, 
    getAllContacts, 
    updateContactById, 
    deleteContactById
} = require('./contactController')

mApp2.get('/', createContact)
mApp2.get('/:id', getContactById)
mApp2.get('/', getAllContacts)
mApp2.get('/:id', updateContactById)
mApp2.get('/:id', deleteContactById)

module.exports = mApp2
