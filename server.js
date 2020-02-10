const express = require('express');
const path = require('path');
const connectDB = require('./config/db');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const nodemailer = require('nodemailer');
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
// app.use('/send', require('./routes/contact'));

// Contact form route
let transporter = nodemailer.createTransport({
  host: 'smtp.zoho.com',
  port: 465,
  secure: true,
  auth: {
    user: 'reach2020@zoho.com',
    pass: 'Github2020*'
  }
})

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

app.post('/send', (req, res, next) => {
  const name = JSON.stringify(req.body.name)
  const email = req.body.email
  const message = req.body.message
  const content = `name: ${name} \n email: ${email} \n message: ${message} `
  console.log(name, email, message)
  const eContent = JSON.stringify(content)
  console.log(eContent)
  const mail = {
    from: name,
    to: 'scottjr101@gmail.com',  //Change to email address that you want to receive messages on
    subject: 'New Message from Contact Form - @Reach',
    text: eContent
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        msg: 'fail'
      })
    } else {
      res.json({
        msg: 'success'
      })
    }
  })
})

// Upload Endpoint
app.post('/upload', async (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: 'No file uploaded' });
  }

  const file = req.files.file;
  const name = req.body.userID;
  const fileNamez = name + '.png';

  let photo = await db.User.findByIdAndUpdate(
    { _id: name },
    { avatar: fileNamez },
    { new: true }
  );

  console.log(photo);

  file.mv(`https://testingreach.herokuapp.com/uploads/${fileNamez}`, err => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }
    res.json({ fileName: file.name, filePath: `/uploads/${fileNamez}` });
  });
});

//Define Models here
const { Chat } = require('./models/Chat');

io.on('connection', socket => {
  console.log('made socket connection', socket.id);

  socket.on('Input Chat Message', msg => {
    //because there is an open serve the db does not need to be called again
    console.log(msg)
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
