const router = require('express').Router()
const User = require('../models/user')

router.post('/register', (req, res) => {
    const user = new User({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
    })
    res.send('Hello')
})

module.exports = router;