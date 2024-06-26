const {Router} = require('express');
const donorsController = require('../controllers/donors.controller');
const asyncErrorWrapper = require('../middlewares/asyncErrorWrapper.middleware');
const validator = require('../middlewares/validator.middleware');

const donorsValidation = require('../validation/donors.validation');

const router = Router();

router.get('/donors', asyncErrorWrapper(donorsController.index));
router.post('/donors', validator(donorsValidation.store), asyncErrorWrapper(donorsController.store));
router.get('/donors/:id', asyncErrorWrapper(donorsController.show));

module.exports = router;