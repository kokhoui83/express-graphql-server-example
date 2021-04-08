import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import crypto from 'crypto'
import schema from './schema.js'

const app = express()

app.get('/', (req, res) => {
    res.send('GraphQL is amazing')
})

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

const root = {
    friend: () => {
        return {
            id: 123456,
            firstName: 'John',
            lastName: 'Doe',
            gender: 'male',
            language: 'en-US',
            email: 'john.doe@example.com'
        }
    },
    createFriend: ({input}) => {
        const id = crypto.randomBytes(10).toString('hex')
        friendDB[id] = input
        return new Friend(id, input)
    }
}

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}))

const host = '0.0.0.0'
const port = 8080

app.listen(port, host, error => {
    if (error) {
        process.exit(1)
    }

    console.log(`Running at ${host}:${port}`)
})