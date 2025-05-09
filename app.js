const express = require('express')
const app = express()
const port = 3000

const postsRouter = require('./routers/posts')

// traduco il body 

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Ciao')
})


app.use('/posts', postsRouter)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})