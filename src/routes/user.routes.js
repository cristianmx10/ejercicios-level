const { Router } = require('express');
const { createUser, listUser } = require('../controllers/user.controller');

const router = Router();

router.post('/api/user/create', createUser);
router.get('/api/user/list', listUser);

module.exports = router;