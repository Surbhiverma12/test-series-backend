const express = require('express');
const router = express.Router();
const { registerInstitute, loginInstitute } = require('../controllers/authController');

router.post('/register', registerInstitute);  
router.post('/login', loginInstitute);

module.exports = router;