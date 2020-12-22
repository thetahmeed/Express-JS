





const mApp2 = require('express').Router()

const {
    createContact, 
    getContactById, 
    getAllContacts, 
    updateContactById, 
    deleteContactById
} = require('./contactController')

mApp2.post('/', createContact)
mApp2.get('/:id', getContactById)
mApp2.get('/', getAllContacts)
mApp2.put('/:id', updateContactById)
mApp2.delete('/:id', deleteContactById)

module.exports = mApp2
