import crypto from 'crypto'

class Friend {
    constructor (id, { firstName, lastName, gender, age, language, email, contacts }) {
        this.id = id
        this.firstName = firstName
        this.lastName = lastName
        this.gender = gender
        this.age = age
        this.language = language
        this.email = email
        this.contacts = contacts
    }
}

const friendDB = {}

export const resolvers = {
    Query: {
        getFriend (_, { id }) {
            return new Friend(id, friendDB[id])
        }
    },
    Mutation: {
        createFriend (_, { input }) {
            const id = crypto.randomBytes(10).toString('hex')
            friendDB[id] = input
            return new Friend(id, input)
        }
    }
}