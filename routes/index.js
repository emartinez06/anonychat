// Import Express and Router
var express = require('express');
var router = express.Router();

// Get
router.get('/', function(req, res) {
    res.render('index', {
        title: 'AnonyChat - Chat with no traces',
        lead: 'Start with your user name and let\'s chat'
    });
});

//Export route
module.exports = router;