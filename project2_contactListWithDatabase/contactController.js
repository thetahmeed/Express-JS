





const Contacts = require('./Contacts')


exports.createContact = (req, res) => {
    let { name, email, phone } = req.body
    let contact = new Contacts({ name, email, phone })

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
    Contacts.find()                                    // inside 'find()' we can write conditions or use 'find().where()' 
        .then(contacts => {
            res.json(contacts)
        })
        .catch(e => {
            console.log(e)
            res.json({
                error: 'Error!'
            })
        })
}

exports.getContactById = (req, res) => {
    let { id } = req.params

    // Contacts.findOne({_id: id}) or
    Contacts.findById(id)
        .then(contact => {
            res.json(contact)
        })
        .catch(e => {
            console.log(e)
            res.json({
                error: 'Error!'
            })
        })
}

exports.updateContactById = (req, res) => {
    let { name, email, phone } = req.body
    let { id } = req.params

    Contacts.findOneAndUpdate(
        { _id: id },                      // where we want to update
        { $set: { name, email, phone } },   // what we want to update
        { new: true })                    // to return the new value

        .then(contact => {
            res.json(contact)
        })
        .catch(e => {
            console.log(e)
            res.json({
                error: 'Error!'
            })
        })

}

exports.deleteContactById = (req, res) => {
    let { id } = req.params

    Contacts.findOneAndDelete({_id: id})
        .then(contact => {
            res.json(contact)
        })
        .catch(e => {
            console.log(e)
            res.json({
                error: 'Error!'
            })
        })
}
