





const router = require('express').Router()

const {
    getAllContacts,
    createContact,
    getContactById,
    updateContactById,
    deleteContactById
} = require('./contactCrontroller')

router.get('/', getAllContacts)
router.post('/', createContact)
router.get('/:id', getContactById)
router.put('/:id', updateContactById)
router.delete('/:id', deleteContactById)


module.exports = router