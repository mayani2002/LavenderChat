import { Server } from 'socket.io';

const PORT = 9000;

const io = new Server(PORT, {
    cors: {
        origin: 'http://localhost:3000'
    }
})
   
let users = [];

const addUser = (userId, socketId) => {
    !users.some(user => user.userId === userId ) && users.push({ userId, socketId});    
    console.log("insider addUser");
}

const getUser = (userId) => {
        return users.find(user => user.userId === userId);
}

const removeUser =(socketId) => {
    users = users.filter(user => user.socketId !== socketId);
}

// to make connection with socket
io.on('connection', (socket) => {

    console.log('user Connected to Socket.io !');

    // connect
    socket.on('addUser', userId =>{
        addUser(userId, socket.id);
        io.emit('getUsers', users);
    })

    // send message
    socket.on('sendMessage', ({senderId, receiverId, text}) =>{
        const user = getUser(receiverId);
        console.log(text);
        io.to(user.socketId).emit('getMessage', {
            senderId, text
        })
    })


    // disconnect
    socket.on('disconnect', () => {
        console.log("disconnected!");

        removeUser(socket.id);
        io.emit('getUsers', users);
    })

})
