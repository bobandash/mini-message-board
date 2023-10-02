const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {DateTime} = require('luxon');

const MessageSchema = new Schema({
  date_of_message: {
    type: String,
  },
  username: {
    type: String,
    required: true,
    maxLength: 100,
  },
  message: {
    type: String,
    required: true,
    maxLength: 1000,
  },
})


MessageSchema.virtual('date_of_message_formatted').get(function(){
  return this.date_of_message ? DateTime.fromJSDate(this.date_of_message).toLocaleString(DateTime.DATE_MED) : '';
})

module.exports = mongoose.model("Message", MessageSchema);