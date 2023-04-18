const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const userSchema = require('./models/user');
const bcrypt = require("bcryptjs");

router.get('/', (req, res) => {
    res.send('From userAPI route')
})

router.post('/register', (req, res) => {
    bcrypt.hash(req.body.password, 10).then((hash) => {
        const user = new userSchema({
            username: req.body.username,
            password: hash
        });
        user.save().then((response) => {
            res.status(201).json({
                message: "User successfully created!"
            });
            let payload = { subject: user._id };
            let token = jwt.sign(payload, 'secretKey');
            let username = req.body.username;
            res.status(200).send({ token, username });
        }).catch(error => {
            res.status(500).json({
                error: error
            });
        });
    });
})

router.post('/login', (req, res) => {
    userSchema.findOne({ username: req.body.username }, (error, user) => {
        if (error) {
            console.log(error)
        } else {
            if (!user) {
                res.status(401).send('Invalid username')
            } else
                if (!bcrypt.compare(req.body.password, user.password)) {
                    res.status(401).send('Invalid password')
                } else {
                    let payload = { subject: user._id }
                    let token = jwt.sign(payload, 'secretKey')
                    let userRole = user.role
					let username = user.username
                    res.status(200).send({ token, userRole, username })
                }
        }
    })
})

router.get('/users', verifyToken, (req, res) => {
    userSchema.find({}, function (err, users) {
        if (err) {
            console.log(err)
        } else {
            res.json(users)
        }
    })
})

function verifyToken(req, res, next) {
    if (!req.headers.authorization) {
        return res.status(401).send('Unauthorized request')
    }
    let token = req.headers.authorization.split(' ')[1]
    if (token == 'null') {
        return res.status(401).send('Unauthorized request')
    }
    let payload = jwt.verify(token, 'secretKey')
    if (!payload) {
        return res.status(401).send('Unauthorized request')
    }
    req.userId = payload.subject
    next()
}

module.exports = router