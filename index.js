const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const router = express.Router()
//Routes
router.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,'index.html'))
})
router.get('/A-side', (req,res) => {
    res.sendFile(path.join(__dirname,'A-menu.html'))
})
router.get('/C-side', (req,res) => {
    res.sendFile(path.join(__dirname,'C-menu.html'))
})
//Connect the Router
app.use('/',router)
app.listen(port, () => console.log(`Listening on port ${port}!`))
