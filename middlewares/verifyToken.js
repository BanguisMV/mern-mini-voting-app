const JWT = require('jsonwebtoken');

module.exports = function(req,res,next) {
    const token = req.header('auth-token')

    if(!token) return res.status(401).json({
        status:401,
        message:'Access Denied'
    })

    try {
        const verified = JWT.verify(token,process.env.NOT_VERY_SECRET_KEY)
        req.user = verified
    } catch (error) {
        res.status(400).json({
            status:400,
            message:"Invalid Token"
        })
    }

    next()
}