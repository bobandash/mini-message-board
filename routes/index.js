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

router.post("/new", function(req, res) {
  const messageText = req.body["message-text"];
  const messageUser = req.body["author-name"];
  messages.push({text: messageText, user: messageUser, added: new Date()});
  res.redirect("/");
})

module.exports = router;
