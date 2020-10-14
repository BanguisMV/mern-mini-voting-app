const bcrypt = require('bcryptjs');
const router = require('express').Router();
const Authorize = require('../middlewares/Authorizer');
const { changePassValidaton  } = require('../middlewares/index');

const User = require('../models/userModel');

const { registerValidaton, } = require('../middlewares/index');

router.get('/', Authorize('admin'),  async ( req, res ) => {
    try {
        res.json(await User.find())
    } catch (error) {
        res.status(400).json({status:400, message:error})
    }
})

// Reset All default for users, they can vote again
router.patch('/reset', Authorize('admin'), async (req, res) => {
    try {
        await User.updateMany({},
            {$set : {canVote: true, didVote: false}},
            {multi: true}
        ) 
        res.json({message: "Resetted"})
    } catch (error) {
        res.status(400).json({status:400, message:error})
    }
})

router.get('/:id', async ( req, res ) => {
    if(req.user._id !== req.params.id) return res.status(403).json({message:'Forbidden'})
    try {
        res.json(await User.findById(req.params.id))
    } catch (error) {
        res.status(400).json({message:error})
    }
})

//ChangePassword Only
router.patch('/:id', async ( req, res ) => {
    // Check if current user id with equal to the params.id
    if(req.user._id !== req.params.id) return res.status(403).json({message:'Forbidden'})
    
    // Check inputs are valid
    const { error } =  await changePassValidaton(req.body)
    if( error ) { return res.status(400).send(error.details[0].message) }

    // Put some salts
    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

     try {
         await User.updateOne({_id: req.params.id},{ $set: { password:hashedPassword}})
         res.status(200).json({message:"Updated Successfully."})
    } catch (error) {
            res.status(400).send(error)
     }

})

router.post('/register', Authorize('admin'), async (req, res) => {

    const { error } = registerValidaton(req.body)       
    if(error) { return res.status(400).send(error.details[0].message.toLocaleUpperCase()) }

    const user = await User.findOne({username: req.body.username}) 
    if(user) { return res.status(400).send('User already exist.')}
       
    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const newUser = new User({
        username:req.body.username.toLowerCase(),
        password:hashedPassword,
        role:req.body.role,
    })

    await newUser.save()
    res.status(200).json(newUser)

})



module.exports.userRoute = router