const router = require('express').Router();
const PartyList = require('../models/partyListModel');
const Authorize = require('../middlewares/Authorizer');
const { isPartyListExist, validateUpdateInputs, whoVoted } = require('../middlewares/index');


// tested


// Routes for everyone authinticated
// can get list of PartyList and Each PartyList
router.get('/', async (req, res) => {
    try {
        await PartyList.find().populate('members',['lastName','firstName','position','votes']).
        exec(function (err, found) {
          if (err) return res.json({message:err});
          res.json(found)
          console.log(req.user);
        })
    } catch (error) {
        res.status(400).json({status:400, message:error})
    }
})

router.get('/:id', isPartyListExist, async (req, res) => {
    try {
        res.json(await PartyList.findById(req.params.id))  
    } catch (error) {
        res.status(400).json({status:400, message:error})
    }
})


// Authorize Routes for Admin and User
// Only user can use the Vote route 
router.post('/', Authorize('admin'), async (req, res) => {    
        const partyList = new PartyList({
            name: req.body.name,
            description: req.body.description,
            candidates: [
                req.body.candidates
            ],
        })
        const savedPartyList =  await partyList.save()
        res.json(savedPartyList)  
})

router.delete('/:id', Authorize('admin'), isPartyListExist, async (req, res) => {
    try {
        await PartyList.deleteOne({_id:req.params.id})
        res.json({message:'Successfully Deleted.'})  
    } catch (err) {
        res.status(400).send(err)
    }
})

router.patch('/:id', Authorize('admin'),  isPartyListExist, async (req, res) => {

    const { error } =  await validateUpdateInputs(req.body)
    if( error ) { return res.status(400).send(error.details[0].message) }

    const whatToUpdate = { $set: 
        {   name:req.body.name, 
            description:req.body.description,
            candidates:req.body.candidates
        }
    }

     try {
         await PartyList.updateOne({_id: req.params.id},whatToUpdate)
         res.status(200).json({message:"Updated Successfully."})
    } catch (error) {
            res.status(400).send(error)
    }

})

router.patch('/reset', Authorize('admin'), async (req, res) => {
    try {
        await PartyList.updateMany({ },{$set : {votes : 0}}) 
        res.json({message: "Resetted"})
    } catch (err) {
        res.status(400).send(err)
    }
})

router.patch('/reset/:id', Authorize('admin'),isPartyListExist, async (req, res) => {
    try {
        await PartyList.updateOne({_id:req.params.id},{$set : {votes : 0}}) 
        res.json({message: "Resetted"})
    } catch (err) {
        res.status(400).send(err)
    }
})

router.patch('/vote/:id', Authorize('user'), whoVoted, isPartyListExist, async (req, res) => {
    try {
        await PartyList.updateOne({_id:req.params.id},{$inc : {votes : 1}}).exec()
        res.json({message: "Thank You, for voting honestly."})
    } catch (err) {
        res.status(400).send(err)
    }
})


module.exports.partyListRoute = router