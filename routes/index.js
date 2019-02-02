// Import Express and Router
let express = require('express');
let router = express.Router();

// Get
router.get('/', function(req, res) {
    res.render('index', {
        title: 'AnonyChat - Chat without fear',
        lead: 'Start with your user name and let\'s chat'
    });
});

//Export route
module.exports = router;