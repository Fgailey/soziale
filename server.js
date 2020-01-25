const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");

var db = require("./models");

// ***Using local connection until further notice regarding method of deployment (heroku/azure.. not sure which we're going to use.)***
const MONGO_URI = 'mongodb://localhost/users_db';


const socket = require('socket.io')

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// connect to mongo database
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("It's in ;)"))
.catch(err => console.log(err));

// Insert sample user
db.userModel.create({ username: "t_bag69", password: "12345", firstName: "John", lastName:"Doe", email: "rideSlowHomie@lyfeOrDeth.com"})
.then(User => console.log(User))
.catch(err => console.log(err.message));

// Define API routes here

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

let server = app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

const io = socket(server);

io.on('connection', (socket) => {
  console.log('made socket connection', socket.id)

  socket.on('chat', function (data) {
    io.sockets.emit('chat', data);
    console.log('chat data: ' + data.message)
  });

  socket.on('typing', function (data) {
    socket.broadcast.emit('typing', data)
    // console.log('working')
  })

  socket.on('user image', function (msg) {
    //Received an image: broadcast to all
    socket.broadcast.emit('user image', socket.nickname, msg);
  });
})
