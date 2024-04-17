const express= require('express');
const router = express.Router();
const watherController = require('../../../controllers/api/v1/wather_controller');
router.post('/add', watherController.register);
router.get('/get', watherController.getAll);
router.get('/getByDate', watherController.getByDate);
module.exports = router;