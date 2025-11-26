const express = require('express')
const router = express.Router()

// Per richiamarli su Postman, usare http://localhost:3000/api/posts/

router.get('/', (req, res) => {
    res.send('show all the posts here')
})

router.get('/:id', (req, res) => {
    res.send(`Show the post with id: ${req.params.id}`)
})

router.post('/', (req, res) => {
    res.send('Store a new post here')
})

router.put('/:id', (req, res) => {
    res.send(`Update the post with id: ${req.params.id}`)
})

router.patch('/:id', (req, res) => {
    res.send(`modify the post with id: ${req.params.id}`)
})

router.delete('/:id', (req, res) => {
    res.send(`Delete the post with id: ${req.params.id}`)
})

module.exports = router