const express = require('express');
const router = express.Router();
let players =[];

router.post("/players",function(req,res){

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

router.post('/players/:playerName/bookings/:bookingId',function(req,res){
    let name= req.params.playerName
    let isPlayerPresent= false

    for(let i=0; i<players.length; i++){
        if (players[i].name==name){
            isPlayerPresent= true
        }
    }

    if (!isPlayerPresent){
        return res.send('player is not present')
    }

    let booking= req.body
    let bookingId= req.params.bookingId
    for (let i=0; i<players.length; i++){
        if (players[i].name==name){
            for (let j=0; j<player[i].bookings.length; j++){
                if(player[i].bookings[j].bookingNumber==bookingId){
                    return res.send('Booking with this ID is already present for the player')
                }
            }
            players[i].bookings.push(booking)
        }
    }
    res.send(players)
})

module.exports = router;