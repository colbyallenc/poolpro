const express = require('express');
const router = express.Router();

const dealerController = require('../controllers/dealer');

// Defining API Routes
router.route('/')
  .get(async (req, res) => {
    res.send("You are not authorised to view this page.");
  });

router.route('/dealers')
  .get(
    dealerController.getDealers
  );

router.route('/send_email')
  .post(
  	dealerController.sendEmailDealer
  );

module.exports = router;