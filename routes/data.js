const express = require('express');
const router = express.Router();

const LoggedIn = [];
const Registered = [];
const product = [
    {prodid: "001", prodname: "product1", prodprice: 25, proddesc: 'I am product1'},
    {prodid: "002", prodname: "product2", prodprice: 50, proddesc: 'I am product2'},
];



router.post('/user/login', function(req, res) {

        let exist;
        console.log('--- login ---');
        console.log('req.body: ', req.body);
        Registered.forEach(function(value, index) {
            if(value.email === req.body.email && value.password === req.body.password) {
                exist = true;
            }
        });

        if(exist)
            res.send(JSON.stringify({status: true, msg: 'user logged In successfully', email: req.body.email,  response: ''}));
        else
            res.send(JSON.stringify({ status: false, msg: 'username or password is invalid', email: req.body.email, response: ''}));

});

router.post('/user/register', function (req, res) {

    console.log('--- Register ---');
    console.log('req.body: ', req.body);
    Registered.push(req.body);
    res.send(JSON.stringify({status: true, msg: 'User Registered Successfully!'}));

});

router.get('/user/profile', function(req,res) {
    let eindex = -1;
    console.log('--- Profile ---');
    console.log('req.body: ', req.body);
    Registered.forEach(function (value, index) {
        if (value.email === req.body.email) {
          res.send(JSON.stringify({data: value}));
        }
    });

    

    


});

router.get('/products', function (req, res) {

    res.send(JSON.stringify(product));

});

module.exports = router;