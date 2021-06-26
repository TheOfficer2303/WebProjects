const express = require('express');
const router = express.Router();
const db = require("../db")

router.get('/', async function(req,res) {
    let data = await db.query(`SELECT * FROM novosti`);
   
    res.render('index', {
        novosti: data.rows,
        user: req.session.user
    })
})

module.exports = router;