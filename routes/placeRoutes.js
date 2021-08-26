const router = require('express').Router();
const Controller = require('../controllers/controller');
const multer = require('multer');
const { storage } = require('../helpers/cloudinary');
const upload = multer({ storage });


router.get('/', Controller.allPlaces)
router.get('/add', Controller.addPlaces)
router.post('/add', upload.single('image'), Controller.addPlacesPost)
router.get('/show/:id', Controller.viewPlace)
router.get('/edit/:id', Controller.edit)
router.post('/edit/:id', upload.single('image'), Controller.editPlacesPost)
router.get('/addUser/:id', Controller.AddUserToPlacePost)
router.post('/addUser/:id', Controller.allPlaces)
router.get('/bookedPlace', Controller.bookedPlace)
router.get('/delete/:id', Controller.deletebookedPlace)

module.exports = router;