const express = require('express');
const router = express.Router();
const db = require("../db");
const User = require('../models/UserModel');

router.get('/', async function(req,res) {
    
    res.render('signup', {
        err: undefined
    })
});


router.post('/', async function(req, res) {
    let err = undefined


    if (req.body.password1 !== req.body.password2) {
        res.render('signup', {
            err: "Lozinke nisu jednake!"
        })
    }

    let user = await User.fetchByUsername(req.body.username);
    let userByEmail = await User.fetchByEmail(req.body.email);
    
    if (user.user_name !== undefined) {
        res.render('signup', {
            err: "Korisnik s ovim korisničkim imenom već postoji!"
        })
    } else if (userByEmail.user_name != undefined) {
        res.render('signup', {
            err: "Korisnik s ovim emailom već postoji!"
        })
    }

    //registracija novog Usera
    let newUser = new User(req.body.username, req.body.email,req.body.firstname, req.body.lastname, req.body.password1);
    await newUser.persist();

    req.session.user = newUser;
    res.redirect("/")
})

module.exports = router;
