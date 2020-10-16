const router = require('express').Router();
const bcrypt = require('bcryptjs');
const JWT = require('jsonwebtoken');

const { loginValidaton  } = require('../middlewares/index');
const User = require('../models/userModel');

router.post('/', async (req, res) => {
    const { error } =  loginValidaton(req.body)
    if(error) { return res.status(400).json({message: error.details[0].message}) }
    
    const user = await User.findOne({username: req.body.username}) 
    if(!user) { return res.status(404).json({message: 'INVALID EMAIL'})}

    const validPassword = await bcrypt.compare(req.body.password, user.password)
    if(!validPassword ) { return res.status(400).json({message:'INVALID PASSWORD'})}
    
    const token = JWT.sign({_id: user._id, role: user.role}, process.env.NOT_VERY_SECRET_KEY, { expiresIn: '1h' } )
    res.header('auth-token', token).json({token: token})

})



module.exports = router