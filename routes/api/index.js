const router = require('express').Router();
const userRoute = require('./User-route');
const thoughtRoute = require('./thoughts-route');

router.use('/users', userRoute);
router.use('/thoughts', thoughtRoute);

module.exports = router;