const express = require('express');
const router = express.Router();

// HOME PAGE
router.get('/', function(req, res, next){
    res.render('index', { title: 'This is HOME PAGE' });
});

module.exports = router;