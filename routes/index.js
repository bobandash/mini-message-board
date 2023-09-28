let express = require('express');
let router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
]

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

router.get("/new", function(req, res) {
  res.render('form', {title: 'Add Message'})
})

module.exports = router;
