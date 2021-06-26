const express = require('express');
const router = express.Router();
const db = require("../db");
const User = require('../models/UserModel');

router.get('/', async function(req,res) {
    
    res.render('login', {
        err: undefined
    })
});

router.post('/', async function(req, res) {
    let author = req.body.author;
    let password = req.body.password;

    
    let user = await User.fetchByUsername(author);

    let err = undefined;
    if (!user.isPersisted() || !user.checkPassword(password)) {
        res.render('login', {
            err: 'Krivi username ili lozinka!'
        })
    } else {
        req.session.user = user;
        res.redirect("./")
    }
})

module.exports = router;