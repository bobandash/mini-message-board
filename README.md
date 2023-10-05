# Mini Message Board
## Description:
A simple chat application in which anyone can type out their own username, write a message, and chat with other people in the application. This was done as part of The Odin Project's curriculum: https://www.theodinproject.com/lessons/nodejs-mini-message-board.

## Demo:
![Mini Message Board](https://github.com/bobandash/mini-message-board/assets/74850332/699e3f52-a844-490e-93ec-d3eb322c8b8a)
Live View: https://small-darkness-4910.fly.dev/

## Technologies Used:
Backend:
- Node.js / Express
- MongoDB

## Quick Start:
1. Fork the project
2. Clone the project using git clone git@github.com:<YOUR-USERNAME>/mini-message-board.git
3. Open the project using the editor of your choice
4. Run npm install
5. Create a database on mongoDB and run node sample_data.js <driver-url>
6. Create an .env file with your database password as MESSAGE_DATABASE_PASSWORD, and change the mongoose.connect url in app.js to your driver url
7. Run npm run devStart to compile the project

## Docs:
### To-Do:
- [ ] Add client-side rendering (react) to convert the time to the computer's local time

## Concepts Learned:
- How to set up server in express
- Express basic form validation
- Deploying an express application
- MVC (Model, View Controller) Architecture for express
