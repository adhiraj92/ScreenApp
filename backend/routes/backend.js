var express = require('express'),
    router = express.Router(),
    db = require('../models');

router.get('/', function(req, res){
    db.Screen.find()
    .then(function(screenData){
        res.send(screenData);
    })
    .catch(function(err){
        res.send(err);
    });
});

router.post('/', function(req, res){
    db.Screen.create(req.body)
    .then(function(newScreen){
        res.send(newScreen);
    })
    .catch(function(err){
        res.send(err);
    });
});

module.exports = router;