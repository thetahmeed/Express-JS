





const Contacts = require('./Contacts')


exports.createContact = (req, res) => {
    let {name, email, phone} = req.body
    let contact = new Contacts({name, email, phone})

    contact.save()
        .then(c => {
                res.json(c)
            })
            
        .catch(e => {
                console.log(e)
                res.json({
                    error: 'Error!'
                })
            })
}

exports.getAllContacts = (req, res) => {
    res.send('1')
}

exports.getContactById = (req, res) => {
    res.send('2')
}

exports.updateContactById = (req, res) => {
    res.send('3')
}

exports.deleteContactById = (req, res) => {
    res.send('4')
}
