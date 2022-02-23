const express = require('express');
const router = express.Router();

router.get('/test-me', function(req,res){
    res.send('my first ever api!')
})

router.get('/films/:filmId', function (req,res) {
    let movi = [ {id: 1,name: 'The Shining'}, {id: 2, name: 'Incendies'},  {id: 3, name: 'Rang de Basanti'}, {id: 4, name: 'Finding Demo'} ]
    let value = req.params.filmId;
    let found = false;
    for(i=0; i<movi.length;i++) {
        if(movi[i].id==value) {
            found = true
            res.send(movi[i])
            break
        }
    }
    if(found==false) {
        res.send('No Movie exists with this id') 
    }
});


module.exports = router;
