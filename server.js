import express from 'express'

const app = express()

const PORT = 3000

app.use(express.json())

app.get('/', (req, res) => {
    res.send('server server running on port 3000')
})

app.listen(PORT, () => {
    console.log('shivam bathre Server is healthy and up on port,', PORT)
})