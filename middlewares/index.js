const Joi = require('joi');

const Candidate = require('../models/candidateModel');
const PartyList = require('../models/partyListModel');
const User = require('../models/userModel');

const isPartyListExist = async (req,res,next) => {
    const partyList = await PartyList.findById(req.params.id) 
    if(!partyList) { return res.status(404).json({
        status:404,
        message:'Partylist not found.'
    })}

    next()
}

const isCandidateExist = async (req,res,next) => {
    const candidate = await Candidate.findById(req.params.id) 
    if(!candidate) { return res.status(404).json({
        status:404,
        message:'Candidate not found.'
    })}

    next()
}

const isUserExist = async (req,res,next) => {
    const userFound = await User.findById(req.params.id) 
    if(!userFound) { return res.status(404).json({
        status:404,
        message:'Cannot find user.'
    })}
    next()
}

const validateUpdateInputs = async (data) => {
    const schema = Joi.object({
        name: Joi.string().min(2).max(230).required(),
        description: Joi.string().min(2).max(260).required(),
    });
    return schema.validate(data);
}

const registerValidaton = data => {
    const schema = Joi.object({
        username: Joi.string().min(2).max(100).required(),
        password: Joi.string().min(5).max(1024).required(),
        role: Joi.string().valid('admin', 'user').required()
    });
    return schema.validate(data);
}

const changePassValidaton = data => {
    const schema = Joi.object({
        password: Joi.string().min(5).max(1024).required(),
    });
    return schema.validate(data);
}

const loginValidaton = data => {
    const schema = Joi.object({
        username: Joi.string().min(2).max(260).required(),
        password: Joi.string().max(1024),
    });
    return schema.validate(data);
}

const whoVoted = async (req,res,next) => {

    const user = await User.findById(req.user._id)
    
    if(user.didVote !== false || user.canVote !== true || req.user.role !== 'user') {
        return res.status(401).json({status:401, message:"Cannot vote"})    
    }

   await User.updateOne({_id:req.user._id},{$set: {didVote:true, canVote:false}})
   
   await PartyList.updateOne({ _id:req.params.id },{$push: { voters: req.user._id }})

next()

}


module.exports.changePassValidaton = changePassValidaton
module.exports.validateUpdateInputs = validateUpdateInputs
module.exports.isCandidateExist = isCandidateExist
module.exports.isPartyListExist = isPartyListExist
module.exports.isUserExist  = isUserExist 
module.exports.registerValidaton = registerValidaton
module.exports.loginValidaton = loginValidaton
module.exports.whoVoted = whoVoted