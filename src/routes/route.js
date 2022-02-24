const express = require('express');
const router = express.Router();
let players =[];

router.post("/bhau",function(req,res){

    let player = req.body;
    let playerName = player.name
    for(let i=0; i<players.length; i++){
        if(players[i].name==playerName){
            res.send('player already exists')
        }
    }
    players.push(player);
    console.log('here is the new player array',players);
    res.send(players)    
});

module.exports = router;