let express = require('express')

let router =express.Router();
let controller= require('../controllers/controller.js');


router.post('/', (req, res) => {
   controller.postCat(req,res);
});


router.get('/', (req, res) => {
   controller.getAllCats(req,res)
});


module.exports =router;