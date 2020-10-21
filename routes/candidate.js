const router = require('express').Router();
const { isCandidateExist } = require('../middlewares/index');
const Authorize = require('../middlewares/Authorizer');

const Candidate = require('../models/candidateModel');
const partyListModel = require('../models/partyListModel');


//Tested

router.get('/', async (req, res) => {
    try {
        await Candidate.find().populate('partyList', 'name').
        exec(function (err, found) {
          if (err) return res.json({message:err});
          res.status(200).json(found)
         });
    } catch (error) {
        res.status(400).json({status:400, message:error})
    }
})

router.get('/:id', isCandidateExist, async (req, res) => {
    try {
        await Candidate.findById(req.params.id).populate('partyList', 'name').
        exec(function (err, found) {
          if (err) return res.json({message:err});
          res.json(found)
         });
    } catch (error) {
        res.status(400).json({status:400, message:error})
    }
})
router.delete('/:id', Authorize("admin"), isCandidateExist, async (req, res) => {
    try {
        await Candidate.deleteOne({_id:req.params.id})
        res.json({message:'Successfully Deleted.'})  
    } catch (err) {
        res.status(400).send(err)
    }
})
router.post('/', Authorize("admin") , async (req, res) => {
    try {
        const candidate = new Candidate({
            position: req.body.position,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            yearLevel: req.body.yearLevel,
            partyList: '5f8144a5e59cfe2f90bc0025',
            photo: req.body.photo
        })
        await candidate.save()
    
        await partyListModel.updateOne({_id: candidate.partyList}, 
        {$push: { members:candidate._id }
        })

        res.json(candidate)  
    } catch (err) {
        res.status(400).json({status:400, message:error})
    }
})

router.patch('/vote/:id', Authorize("user"), isCandidateExist, async (req, res) => {
    try {
        await Candidate.updateOne({_id:req.params.id},{$inc : {votes : 1}}).exec()
        res.json({message: "Thank You, for voting honestly."})
    } catch (err) {
        res.status(400).json({status:400, message:error})
    }
})

router.patch('/reset', Authorize("admin"), async (req, res) => {
    try {
        await Candidate.updateMany({},
            {$set : {votes : 0}},
            {multi: true}
        ) 
        res.json({message: "Resetted"})
    } catch (err) {
        res.status(400).json({status:400, message:error})
    }
})

router.patch('/reset/:id', Authorize("admin"),isCandidateExist, async (req, res) => {

    try {
        await Candidate.updateOne({_id:req.params.id},{$set : {votes : 0}}) 
        res.json({message: "Resetted"})
    } catch (err) {
        res.status(400).send(err)
    }
})


module.exports.candidateRoute = router