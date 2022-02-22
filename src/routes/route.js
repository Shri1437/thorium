const express = require('express');
const router = express.Router();

router.get('/test-me', function(req,res){
    res.send('my first ever api!')
})

router.get('/movies', function(req, res) {
    res.send(['Kedarnath', 'POP','Holmes','F&F','Marvel'])
        
})




module.exports = router;
