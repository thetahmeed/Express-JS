





const mExpress = require('express');
const { 
    getAllContact,
    postContact,
    getSingleContact,
    putContact,
    deleteContact
    } = require('./allHandler')

const mApp = mExpress();

mApp.get('/contacts', getAllContact)

mApp.use(mExpress.urlencoded({extended: 'true'}))
mApp.use(mExpress.json())

mApp.post('/contacts', postContact)
mApp.get('/contacts/:cid', getSingleContact)
mApp.put('/contacts/:cid', putContact)
mApp.delete('/contacts/:cid', deleteContact)

mApp.get('/', (req, res) => {
    res.send('<h1>HOME!</h1>')
})

mApp.listen(8080, () => {
    console.log('I am on port 8080')
})