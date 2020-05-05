const router = require('express').Router();
const filmCtrl = require('../../controllers/films');

router.post('/', filmCtrl.create);
router.get('/', filmCtrl.index);


module.exports = router;