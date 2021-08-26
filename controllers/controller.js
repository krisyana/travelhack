const { User, Place, PlaceUser } = require('../models');
const ExpressError = require('../helpers/ExpressError');
const { compare } = require('../helpers/bcrypt')
const getHoursPosted = require('../helpers/getHourPosted');
const { Op } = require("sequelize");


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
                        res.redirect('/login')
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
            .catch(err => {
                if (err.name === "SequelizeValidationError") {
                    req.flash('error', err.errors.map(error => error.message))
                    res.redirect('/register')
                } else {
                    res.flash('error', err)
                    res.redirect('/register')
                }
            })
    }

    static updateUser(req, res) {
        User.findByPk(req.params.id)
            .then(data => res.render('users/update', { user: data }))
            .catch(err => res.send(err))
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
        Place.findAll({ include: User })
            .then(data => res.render('places/index', { places: data, getHoursPosted }))
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
            .then(data => {
                return PlaceUser.create({
                    UserId: req.session.user.id,
                    PlaceId: data.id,
                    status: "Author"
                })
            })
            .then(_ => {
                req.flash('success', 'Place Added')
                res.redirect('/places')
            })
            .catch(err => {
                if (err.name === "SequelizeValidationError") {
                    req.flash('error', err.errors.map(error => error.message))
                    res.redirect('/places/add')
                } else {
                    res.flash('error', err)
                    res.redirect('/places/add')
                }
            })
    }

    static viewPlace(req, res) {
        Place.findByPk(req.params.id)
            .then(data => res.render('places/show', { place: data }))
            .catch(err => {
                req.flash('error', err)
                res.redirect('/places')
            })
    }

    static edit(req, res) {
        Place.findByPk(req.params.id)
            .then(data => res.render('places/edit', { place: data }))
            .catch(err => res.send(err))
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
            .catch(err => {
                if (err.name === "SequelizeValidationError") {
                    req.flash('error', err.errors.map(error => error.message))
                    res.redirect(`/places/${req.params.id}`)
                } else {
                    res.flash('error', err)
                    res.redirect(`/places/${req.params.id}`)
                }
            })
    }

    static AddUserToPlacePost(req, res) {
        let PlaceId = +req.params.id
        PlaceUser.create({
                PlaceId,
                UserId: req.session.user.id,
                status: 'Booked'
            })
            .then(data => Place.decreasequantity(data.PlaceId, 2))
            .then(_ => {
                req.flash('success', 'Place Booked')
                res.redirect('/places')
            })
            .catch(err => res.send(err))
    }
    static bookedPlace(req, res) {
        let id = req.session.user.id;
        User.findByPk(id, { include: Place })
            .then(data => {
                res.render("places/bookedPlace", { user: data })
            })
            .catch(err => res.send(err))
    }

    static deletebookedPlace(req, res) {
        let id = req.params.id
        PlaceUser.destroy({
                where: {
                    PlaceId: id,
                    UserId: req.session.user.id
                }
            })
            .then(data => {
                req.flash('success', 'Booked Place Deleted')
                res.redirect("/places/bookedPlace")
            })
            .catch(err => res.send(err))
    }

    static logout(req, res) {
        req.session.user = null
        res.redirect('/')
    }
}

module.exports = Controller;