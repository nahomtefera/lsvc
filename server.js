const express = require("express");
const app = express();
const cors = require('cors')
const path = require('path');
const server =  require("http").createServer(app);
const io = require("socket.io").listen(server); 

let users = []
let connections = []

server.listen(process.env.PORT || 8080)
console.log('server running on port 8080')

// Connect to react client
app.use(express.static(path.join(__dirname, "/client/build")))

// app.use(cors({ origin: "*" }))
app.use(cors({credentials: true, origin: '*'}));


// Sockets 

io.sockets.on('connection', (socket) => {
  connections.push(socket);
  console.log('Connected: %s sockets connected ', connections.length)

  // Disconnect
  socket.on('disconnect', (data) => {
    // if(!socket.username) return
    users.splice(users.indexOf(socket.username), 1);
    updateUsernames( )
    connections.splice(connections.indexOf(socket), 1);
    console.log('Disconnected %s sockets connected ', connections.length )
  })

  // Send Message
  socket.on('send message', data => {
    io.sockets.emit('new message', {msg: data, user: socket.username, id: socket.id })
  })

  // New User
  socket.on('new user', (data, cb) => {
    console.log('newuser: ', data)
    cb(true)
    socket.username = data;
    users.push({"username": socket.username, "id": socket.id})
    updateUsernames()
  })
  updateUsernames = ()=>{
    io.sockets.emit('get users', users )
  }

  // VIDEO OFFERS
  socket.on('make-offer', function (data) {
    socket.to(data.to).emit('offer-made', {
      offer: data.offer,
      socket: socket.id
    });
  });

  socket.on('make-answer', function (data) {
    socket.to(data.to).emit('answer-made', {
      socket: socket.id,
      answer: data.answer
    });
  });
  
})