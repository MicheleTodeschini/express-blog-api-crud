const express = require('express')

const app = express()
app.use(express.json())

const PORT = 3000

const postRouter = require('./routers/posts')

app.listen(PORT, () => {
    console.log(`Server listenig on port: http://localhost:${PORT}`);

})

app.use(notFound)
app.use('/api/posts', postRouter)