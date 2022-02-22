const express = require('express');
const router = express.Router();

router.get('/test-me', function(req,res){
    res.send('my first ever api!')
})

router.get('/movies/:movieID', function(req, res) {
    mov = ['Kedarnath', 'POP','Holmes','F&F','Marvel']
    let value = req.params.movieID
    if(value>mov.length-1){
        res.send('Not Availbe')
    }
    else{
        res.send(mov[value])
    }
        
})




module.exports = router;
