const router = require('express').Router();
const User = require('../models/user.model')

router.route('*').get((req, res) => {
    User.find().then(result => {
        res.render('index', {
            users: result
        })
    })
    // User.find()
    //     .then(users => res.json(users))
    //     .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req, res) => {
    const phone = req.body.phone
    const email = req.body.email

    const newUser = new User({ phone, email })

    newUser.save()
        .then(() => res.json('You Signed Up Successfuly!'))
        .catch(err => {
            res.json("Try Again later")
            res.status(400).json('Error: ' + err)
        })
})

module.exports = router