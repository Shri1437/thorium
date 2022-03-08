

const mwValidation = function(req,res,next) {
    let data = req.headers

    if (data.hasOwnProperty("isfreeappuser")===false)
    res.send({error : "the request is missing required property in the header"}) 
    else
    next()
    
}

module.exports.mwValidation = mwValidation