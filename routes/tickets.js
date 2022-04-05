const express = require('express');
const router = express.Router();
const ticketsCtrl = require('../controllers/tickets');

// router.get('/performers/new', performersCtrl.new);
// router.post('/performers', performersCtrl.create);
// router.post('/movies/:id/performers', performersCtrl.addToCast)

router.get('/flights/:id/tickets/new', ticketsCtrl.new);
router.post('/flights/:id/tickets', ticketsCtrl.create)

module.exports = router;