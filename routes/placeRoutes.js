const router = require('express').Router();
const Controller = require('../controllers/controller');
const multer = require('multer');
const { storage } = require('../helpers/cloudinary');
const upload = multer({ storage });


router.get('/', Controller.allPlaces)
router.get('/add', Controller.addPlaces)
router.post('/add', upload.single('image'), Controller.addPlacesPost)
router.get('/edit/:id', Controller.edit)
router.post('/edit/:id', upload.single('image'), Controller.editPlacesPost)
router.get('/addUser', Controller.allPlaces)
router.post('/addUser', Controller.allPlaces)

module.exports = router;