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
    const name = req.body.name
    const email = req.body.email

    const newUser = new User({ name, email })

    newUser.save()
        .then(() => res.json('User Added!'))
        .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router