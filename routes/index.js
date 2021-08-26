const router = require('express').Router();
const userRoutes = require('./userRoutes');
const placeRoutes = require('./placeRoutes');
const Controller = require('../controllers/controller')

router.get('/', Controller.home)
router.get('/login', Controller.login)
router.get('/register', Controller.register)
router.use('/places', placeRoutes);

module.exports = router;