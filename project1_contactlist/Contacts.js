





class Contacts {

    constructor () {
        this.contacts = []
    }

    getAllContacts () {
        return this.contacts
    }
 
    // "filter" returns Array, "find" returns Object
    getSingleContact (id) {                         
        return this.contacts.find(contact => this.contact.id == id)
    }

    createContact (contact) {
        contact.id = this.contacts.length + 1
        this.contacts.push(contact)

        return contact
    }

    updateContact (id, updatedContact) {
        let index = this.contacts.findIndex(contact => contact.id == id)

        this.contacts[index].name = updatedContact.name || this.contacts[index].name
        this.contacts[index].phone = updatedContact.phone || this.contacts[index].phone
        this.contacts[index].email = updatedContact.email || this.contacts[index].email

    }

    deleteContact (id) {
        let index = this.contacts.findIndex(contact => contact.id == id)
        let deletedObj = this.contacts[index]
        this.contacts = this.contacts.filter(contact => contact.id != id)

        return deletedObj
    }

}

fjhkduhfk

module.exports = new Contacts()