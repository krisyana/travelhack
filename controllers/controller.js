const { User, Place, PlaceUser } = require('../models');
const ExpressError = require('../helpers/ExpressError');
const { compare } = require('../helpers/bcrypt')



class Controller {
    static home(req, res) {
        res.render('home');
    }
    static login(req, res) {
        res.render('users/login');
    }

    static loginPost(req, res) {
        const { username, password } = req.body;
        User.findOne({
                where: {
                    username
                }
            })
            .then(data => {
                if (data) {
                    if (compare(password, data.password)) {
                        delete data.password
                        req.session.user = data
                        req.flash('success', 'Welcome to TravelHack')
                        res.redirect('/places')
                    } else {
                        req.flash('error', 'User/Password Salah')
                    }
                } else {
                    req.flash('error', 'User/Password Salah')
                    res.redirect('/login')
                }
            })
            .catch(err => req.flash('error', err))

    }
    static register(req, res) {
        if (req.session.user) {
            req.flash('error', 'You Already Loged In')
            res.redirect('/places')
        } else {
            res.render('users/registerpro');
        }
    }

    static registerPost(req, res) {
        const { username, password, email } = req.body;
        User.create({ username, password, email })
            .then(data => {
                delete data.password
                req.session.user = data
                req.flash('success', 'Welcome to TravelHack')
                res.redirect('/places')
            })
            .catch(err => req.flash('error', err))
    }

    static updateUser(req, res) {
        res.render('users/update');
    }

    static updateUserPost(req, res) {
        const { username, password, email } = req.body;
        User.update({ username, password, email }, { where: { id: req.params.id } })
            .then(_ => {
                req.flash('success', 'User Updated')
                res.redirect('/places')
            })
            .catch(err => res.send(err))
    }


    static allPlaces(req, res) {
        Place.findAll()
            .then(data => res.render('places/index', { places: data }))
            .catch(err => res.send(err))

    }
    static addPlaces(req, res) {
        res.render('places/add')
    }

    static addPlacesPost(req, res) {
        const image = req.file.path;
        const { name, location, price, quota, description } = req.body;
        Place.create({
                name,
                location,
                price,
                quota,
                image,
                description
            })
            .then(_ => {
                req.flash('success', 'Place Added')
                res.redirect('/places')
            })
            .catch(err => req.flash('error', err))
    }

    static edit(req, res) {
        res.render('places/edit');
    }

    static editPlacesPost(req, res) {
        const image = req.file.path;
        const { name, location, price, quota, description } = req.body;
        Place.update({
                name,
                location,
                price,
                quota,
                image,
                description
            }, { where: { id: req.params.id } })
            .then(_ => res.redirect('/places'))
            .catch(err => res.send(err))
    }
    static AddUserToPlace(req, res) {
        res.render('places/addUser')
    }
    static AddUserToPlacePost(req, res) {
        let PlaceId = req.params.id
        PlaceUser.create({
                PlaceId,
                UserId: req.currentUser.id,
                status: 'Done'
            }, { where: { id: req.params.id } })
            .then(_ => res.redirect('/places'))
            .catch(err => res.send(err))
    }

    static logout(req, res) {
        req.session.user = null
        res.redirect('/')
    }
}

module.exports = Controller;