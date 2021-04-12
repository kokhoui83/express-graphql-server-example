import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost/friends', {
    auth: {
        user: 'root',
        password: 'root123'
    },
    authSource: 'admin',
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection
db.on('error', err => { console.log(err) })
db.on('open', () => { console.log('database connected') })

const friendSchema = new mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    gender: {
        type: String
    },
    age: {
        type: Number
    },
    language: {
        type: String
    },
    email: {
        type: String
    },
    contacts: {
        type: Array
    }
})

const Friends = mongoose.model('friends', friendSchema)

export { Friends }