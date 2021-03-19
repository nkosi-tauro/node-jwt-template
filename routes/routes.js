const router = require('express').Router()
const User = require('../models/user')
const bcrypt = require('bcryptjs')

router.post('/register',async (req, res) => {
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)

    const user = new User({
        name:req.body.name,
        email:req.body.email,
        password: hashedPassword,
    })
    const result = user.save()
    const {password, ...data} = (await result).toJSON

    res.send(data)
})

module.exports = router;