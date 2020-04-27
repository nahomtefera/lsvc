const express = require("express");
const app = express();
const server =  require("http").createServer(app);
const io = require("socket.io").listen(server); 

let users = []
let connections = []

server.listen(process.env.PORT || 8080)
console.log('server running on port 8080')

app.get('/', (req, res)=>{
  res.sendFile(__dirname + "/index.html")
})

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
    io.sockets.emit('new message', {msg: data, user: socket.username })
  })

  // New User
  socket.on('new user', (data, cb) => {
    cb(true)
    socket.username = data;
    users.push(socket.username)
    updateUsernames()
  })

  updateUsernames = ()=>{
    io.sockets.emit('get users', users )
  }
  
})