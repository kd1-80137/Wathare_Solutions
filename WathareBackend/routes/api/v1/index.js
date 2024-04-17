const express= require('express');
const router = express.Router();
router.use('/wather-solution', require('./watherSolution'));
module.exports = router;