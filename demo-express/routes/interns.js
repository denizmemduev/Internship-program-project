const express = require('express');
const router = express.Router();

router.post('/',(req, res)=>{

    console.log(req.body.firstname); 
    console.log(req.body.lastname);
    console.log(req.body.university);

res.end();

})

module.exports = router;