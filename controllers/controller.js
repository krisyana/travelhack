const { User, Place, PlaceUser } = require('../models')

class Controller {
    static home(req, res) {
        res.render('home');
    }
    static login(req, res) {
        res.render('users/login');
    }
    static register(req, res) {
        res.render('users/registerpro');
    }

    static updateUser(req, res) {
        res.render('users/update');
    }

    static updateUserPost(req, res) {
        User.update({}, { where: { id: req.params.id } })
            .then(_ => res.redirect('/'))
            .catch(err => res.send(err))
    }


    static allPlaces(req, res) {
        res.render('places/index');
    }
    static addPlaces(req, res) {
        res.render('places/add');
    }

    static addPlacesPost(req, res) {
        Place.create({})
            .then(_ => res.redirect('/'))
            .catch(err => res.send(err))
    }

    static edit(req, res) {
        res.render('places/edit');
    }

    static editPlacesPost(req, res) {
        Place.update({}, { where: { id: req.params.id } })
            .then(_ => res.redirect('/'))
            .catch(err => res.send(err))
    }
}

module.exports = Controller;