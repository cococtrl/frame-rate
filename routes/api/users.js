const router = require('express').Router();
const usersCtrl = require('../../controllers/users');

router.post('/signup', usersCtrl.signup);
router.post('/login', userCtrl.login);

module.exports = router;