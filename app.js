const express = require('express')
const router = express.Router();

router.get('/artists/:id', function(req,res) {
         console.log('id는 ' + req.params.id + '입니다');
        res.send('id' + req.params.id)
});

// 여러개도 가능
//
router.get('/artists/:id/company/:company', function(req,res) {

        res.send('id' + req.params.id + '회사' + req.params.company)
});
~                                                                                                                                ~                                                                                                                                ~                             
