const express = require('express');
const router = express.Router();

router.get('/', async function(req,res) {
    
    req.session.user = undefined;

    res.redirect('/')
});

module.exports = router