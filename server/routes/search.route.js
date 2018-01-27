const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log('req', req);
    res.send('hi');
});

module.exports = router;