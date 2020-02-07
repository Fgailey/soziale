const express = require('express');
const path = require('path');
var axios = require('axios');
const connectDB = require('./config/db');
var cors = require('cors');
const fileUpload = require('express-fileupload');
const db = require('./models/index');

const app = express();

// Connect Database
connectDB();

const PORT = process.env.PORT || 5000;

const server = require('http').createServer(app);
const io = require('socket.io')(server);
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: false }));

// Define API routes here
app.use(cors());
app.use(fileUpload());
app.use('/users', require('./routes/users'));
app.use('/auth', require('./routes/auth'));
app.use('/profile', require('./routes/profile'));
app.use('/posts', require('./routes/posts'));
app.use('/chat', require('./routes/chat'));
app.use('/vidyoToken', require('./routes/vidyoToken'));
// app.use('/uploads', require('./routes/uploads'));

// Upload Endpoint
app.post('/upload', async (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: 'No file uploaded' });
  }
  
  console.log(req);

  const file = req.files.file;
  const avatar = file.name;
  // const name = req.user._id;

  let photo = await db.User.findByIdAndUpdate(
    { _id: name },
    { avatar: avatar },
    { new: true }
  );
  console.log(photo);

  file.mv(`${__dirname}/client/public/uploads/${file.name}`, err => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }
    res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
  });
});

//Define Models here
const { Chat } = require('./models/Chat');

io.on('connection', socket => {
  console.log('made socket connection', socket.id);

  socket.on('Input Chat Message', msg => {
    //because there is an open serve the db does not need to be called again
    try {
      let chat = new Chat({
        message: msg.chatMessage,
        sender: msg.userID,
        type: msg.type
      });

      chat.save((err, doc) => {
        if (err) return res.json({ success: false, err });

        Chat.find({ _id: doc._id })
          .populate('sender')
          .exec((err, doc) => {
            return io.emit('Output Chat Message', doc);
          });
      });
    } catch (error) {
      console.error(error);
    }
  });
});
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

server.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
