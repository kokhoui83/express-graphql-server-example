import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.send('GraphQL is amazing')
})

const host = '127.0.0.1'
const port = 8080

app.listen(port, host, error => {
    if (error) {
        process.exit(1)
    }

    console.log(`Running at ${host}:${port}`)
})