const router = require('express').Router();
const bcrypt = require('bcryptjs');
const JWT = require('jsonwebtoken');

const { loginValidaton  } = require('../middlewares/index');
const User = require('../models/userModel');

router.post('/', async (req, res) => {
    const { error } =  loginValidaton(req.body)
    if(error) { return res.status(400).send(error.details[0].message) }
    
    const user = await User.findOne({username: req.body.username}) 
    if(!user) { return res.status(400).send('Email is not found.')}

    const validPassword = await bcrypt.compare(req.body.password, user.password)
    if(!validPassword ) { return res.status(400).send('Invalid password.')}
    
    const token = JWT.sign({_id: user._id, role: user.role}, process.env.NOT_VERY_SECRET_KEY )
    res.header('auth-token',token).send(token)
    
})



module.exports = router