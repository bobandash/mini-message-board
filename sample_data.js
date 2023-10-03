const Message = require('./models/message');
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const userArgs = process.argv.slice(2);
const mongoDB = userArgs[0];

main().catch((err) => console.log(err));

async function main() {
  console.log("Debug: About to connect");
  await mongoose.connect(mongoDB);
  console.log("Debug: Should be connected?");
  await createMessages();
  console.log("Debug: Closing mongoose");
  await mongoose.connection.close();
}

async function messageCreate({date_of_message, username, message}){
  const newMessage = new Message({
    date_of_message, username, message
  })
  await newMessage.save();
}

async function createMessages(){
  await messageCreate({
      date_of_message: new Date('05 October 2011 14:48 UTC'),
      username: 'Bob Ross',
      message: 'Anyone want to paint?'
  })
  await messageCreate({
    date_of_message: new Date('06 October 2011 14:48 UTC'),
    username: 'Stranger 1',
    message: 'Yeah sure!'
  })
  await messageCreate({
    date_of_message: new Date('06 October 2011 16:48 UTC'),
    username: 'Stranger 2',
    message: `I'm down!`
  })
  await messageCreate({
    date_of_message: new Date('06 October 2011 18:48 UTC'),
    username: 'Stranger 3',
    message: `Where'd this group chat come from?`
  })
}