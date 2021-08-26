const router = require('express').Router();
const userRoutes = require('./userRoutes');
const placeRoutes = require('./placeRoutes');
const Controller = require('../controllers/controller')
const { isLoggedIn, isAuthor } = require('../middlewares')

router.get('/', Controller.home)
router.get('/login', Controller.login)
router.get('/logout', Controller.logout)
router.post('/login', Controller.loginPost)
router.get('/register', Controller.register)
router.post('/register', Controller.registerPost)
router.use('/places', isLoggedIn, placeRoutes);

module.exports = router;