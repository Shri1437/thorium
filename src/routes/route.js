const express = require('express');
const router = express.Router();

router.get('/test-me', function(req,res){
    res.send('my first ever api!')
})

router.get('/shows', function(req, res) {
 res.send([{id:1, name: "The Shining"}, {id:2, name: "Incendies"}, {id:3, name:"Rang de Basanti"}, {id:4, name:"Finding Demo"}])   
        
})




module.exports = router;
