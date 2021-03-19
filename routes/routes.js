const router = require('express').Router()
const User = require('../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

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

router.post('/login', async (req, res) => {
    const user = await User.findOne({email: req.body.email})

    if(!user){
       return res.status(404).send({
           message: 'user not found'
       }) 
    }

    if(!await bcrypt.compare(req.body.password, user.password)){
        return res.status(400).send({
            message: 'Invalid credentials'
        }) 
    }

    const token = jwt.sign({_id:user._id}, process.env.JWT_SECRET)

    res.cookie('jwt', token, {
        httpOnly: true,
        maxAge: 24*60*60*1000 //1 day
    })
    res.send({
        message: "success"
    })
})

router.get('/user', async (req, res) => {
    try{
        const cookie = req.cookies['jwt']
        const claims = jwt.verify(cookie, process.env.JWT_SECRET)
    
        if(!claims) {
            return res.status(401).send({
                message: 'Unauthorized'
            }) 
        }
        const user = await User.findOne({_id: claims._id})
        const {password, ...data} = (await user).toJSON
        res.send(data) 
    }
    catch(e){
        return res.status(401).send({
            message: 'Unauthorized'
        }) 
    }
})

router.post('/logout', async (req, res) => {
    // remove cookie
    res.cookie('jwt', '', {maxAge:0})
    res.send({
        message : 'success'
    })
})

module.exports = router;