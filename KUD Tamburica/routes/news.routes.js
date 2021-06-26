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
    let author = req.body.author;
    let imagesrc = req.body.image;

    data = await db.query(`
    INSERT INTO novosti(imagesrc, about, author)
    VALUES('images/${imagesrc}', '${about}', '${author}')
    `)
    res.redirect('/')
})

module.exports = router;