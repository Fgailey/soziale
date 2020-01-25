const io = require('./server.js').io

module.exports = function(socket){
    socket.emit('news', {hello: 'world'})
    socket.on('my other event', function (data){
        console.log(data)
    })
}