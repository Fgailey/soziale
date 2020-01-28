const express = require("express");
const path = require("path");
const connectDB = require('./config/db');

// Connect Database
connectDB();

const PORT = process.env.PORT || 5000;
const app = express();
const socket = require('socket.io')

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: false }));
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// Define API routes here
app.use('/users', require('./routes/users'));
app.use('/auth', require('./routes/auth'));

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
