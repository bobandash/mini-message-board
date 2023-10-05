const Message = require('../models/message');
const {body, validationResult} = require('express-validator')
const asyncHandler = require("express-async-handler");
const he = require('he');

exports.messages_get = asyncHandler(async (req, res, next) => {
  const allMessages = await Message.find({})
    .sort({date_of_message: 1})
    .exec();
  allMessages.forEach(msg => {
    msg.username = he.decode(msg.username);
    msg.message = he.decode(msg.message);
  });
  res.render('index', {
    title: 'Mini Messageboard',
    messages: allMessages
  })
})

exports.messages_post = [
  body("username", "Username must not be empty")
    .trim()
    .isLength({min: 1})
    .escape(),
  body("message", "Message must not be empty")
    .trim()
    .isLength({min: 1})
    .escape(),
  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req).array();
    console.log(errors);
    const newMessage = new Message({
      username: req.body.username,
      message: req.body.message,
      date_of_message: new Date()
    })

    if(errors.length > 0){
      const allMessages = Array.from(await Message.find({})
        .sort({date_of_message: 1})
        .exec());
      allMessages.forEach(msg => {
        msg.username = he.decode(msg.username);
        msg.message = he.decode(msg.message);
      });
      res.render('index', {
        title: 'Mini Messageboard',
        messages: allMessages,
        errors: errors,
        username: he.decode(req.body.username),
      })
    } else {
      await newMessage.save();
      const allMessages = await Message.find({})
      .sort({ date_of_message: 1 })
      .exec();
      allMessages.forEach(msg => {
        msg.username = he.decode(msg.username);
        msg.message = he.decode(msg.message);
      });
      res.render('index', {
        title: 'Mini Messageboard',
        messages: allMessages,
        username: he.decode(req.body.username),
      })
    }
  })
]
