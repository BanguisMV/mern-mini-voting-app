const router = require('express').Router();
const bcrypt = require('bcryptjs');
const JWT = require('jsonwebtoken');

const { loginValidaton  } = require('../middlewares/index');
const User = require('../models/userModel');

router.post('/', async (req, res) => {
    const { error } =  loginValidaton(req.body)
    if(error) { return res.status(400).json({status:400, message: error.details[0].message}) }
    
    const user = await User.findOne({username: req.body.username}) 
    if(!user) { return res.status(404).json({status:404, message: 'INVALID USERNAME'})}

    const validPassword = await bcrypt.compare(req.body.password, user.password)
    if(!validPassword ) { return res.status(400).json({status:400,message:'INVALID PASSWORD'})}
    
    const token = JWT.sign({_id: user._id, role: user.role}, process.env.NOT_VERY_SECRET_KEY, { expiresIn: '1h' } )
    res.status(200).json({status:200, token: token})

})

module.exports = router