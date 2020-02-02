const express = require('express');
const path = require('path');
const connectDB = require('./config/db');

const app = express();

// Connect Database
connectDB();

const PORT = process.env.PORT || 5000;

const server = require('http').createServer(app);
const io = require('socket.io')(server);

const mongoose = require('mongoose');
const config = require('./config/default.json');

const connect = mongoose
  .connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

// Define API routes here
app.use('/users', require('./routes/api/users'));
app.use('/auth', require('./routes/api/auth'));
app.use('/profile', require('./routes/api/profile'));
app.use('/posts', require('./routes/api/posts'));
app.use('/chat', require('./routes/api/chat'));

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: false }));

// Define API routes here
app.use('/users', require('./routes/users'));
app.use('/auth', require('./routes/auth'));
app.use('/profile', require('./routes/profile'));
app.use('/posts', require('./routes/posts'));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// const { Chat } = require("./models/Chat");

io.on('connection', socket => {
  console.log('made socket connection', socket.id);

  socket.on('chat', data => {
    io.sockets.emit('chat', data);
    console.log('chat data: ' + data.chatMessage);
    console.log('chat time: ' + data.nowTime);
  });
  // socket.on("Input Chat Message", msg => {

  // connectDB.then(db => {
  //   try {
  //       let chat = new Chat({ message: msg.chatMessage, sender:msg.userID, type: msg.type })

  //       chat.save((err, doc) => {
  //         if(err) return res.json({ success: false, err })

  //         Chat.find({ "_id": doc._id })
  //         .populate("sender")
  //         .exec((err, doc)=> {

  //             return io.emit("Output Chat Message", doc);
  //         })
  //       })
  //   } catch (error) {
  //     console.error(error);
  //   }
  // })
  //  })
});

server.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
// io.on('connection', (socket) => {
//   console.log('made socket connection', socket.id)

//   socket.on('chat', function (data) {
//     io.sockets.emit('chat', data);
//     console.log('chat data: ' + data.message)
//   });

//   socket.on('typing', function (data) {
//     socket.broadcast.emit('typing', data)
//     // console.log('working')
//   })

//   socket.on('user image', function (msg) {
//     //Received an image: broadcast to all
//     socket.broadcast.emit('user image', socket.nickname, msg);
//   });
// })
