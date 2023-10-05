const express = require("express");
const router = express.Router();
const messageController = require('../controller/messageController');

/* GET home page. */
router.get('/', messageController.messages_get);

router.post('/', messageController.messages_post);

module.exports = router;
