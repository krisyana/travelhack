const router = require('express').Router();
const Controller = require('../controllers/controller')


router.get('/', Controller.allPlaces)
router.get('/add', Controller.addPlaces)
router.post('/add', Controller.addPlaces)
router.get('/addUser', Controller.allPlaces)
router.post('/addUser', Controller.allPlaces)

module.exports = router;