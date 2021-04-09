import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import { schema } from './schema.js'

const app = express()

app.get('/', (req, res) => {
    res.send('GraphQL is amazing')
})

app.use('/graphql', graphqlHTTP({
    schema: schema,
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