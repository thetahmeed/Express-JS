





const contacts = require('./Contacts')


exports.getAllContact = (req, res) => {
    res.json(contacts.getAllContacts())
}

exports.postContact = (req, res) => {

    let {name, phone, email} = req.body
    
    let contact = contacts.createContact({
        name,
        phone,
        email
    })

    res.json(contact)
}

exports.getSingleContact = (req, res) => {
 
}

exports.putContact = (req, res) => {

}

exports.deleteContact = (req, res) => {
 
}