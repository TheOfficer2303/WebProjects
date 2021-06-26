const express = require('express');
const router = express.Router();
const db = require("../db")

router.get('/', async function(req,res) {
    
    res.render('addNews', {
    

    })
});

router.post('/', async function(req, res) {
    console.log(req.body)

    let about = req.body.text;
    let user = req.session.user
    let imagesrc = req.body.image;

    console.log(user)
    data = await db.query(`
    INSERT INTO novosti(imagesrc, about, author)
    VALUES('images/${imagesrc}', '${about}', '${user.user_name}')
    `)
    res.redirect('/')
})

module.exports = router;