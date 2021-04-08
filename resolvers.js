import crypto from 'crypto'

class Friend {
    constructor (id, { firstName, lastName, gender, language, email }) {
        this.id = id
        this.firstName = firstName
        this.lastName = lastName
        this.gender = gender
        this.language = language
        this.email = email
    }
}

const friendDB = {}

const resolvers = {
    getFriend: ({ id }) =>{
        return new Friend(id, friendDB[id])
    },
    createFriend: ({ input }) => {
        const id = crypto.randomBytes(10).toString('hex')
        friendDB[id] = input
        return new Friend(id, input)
    }
}

export default resolvers