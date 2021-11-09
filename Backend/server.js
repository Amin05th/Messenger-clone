const io = require("socket.io")(8000, {
    cors: {
        origin: "*",
        methods: ['GET', 'POST'],
    }
})

io.on('connection', socket => {
    const id = socket.handshake.query.id
    socket.join(id)

    socket.on('send-message', ({recipients, text}) => {
        recipients.forEach(recipient => {
            const NewRecipient = recipients.filter(r => {r  !== recipient})
            NewRecipient.push(id)
            socket.broadcast.to(recipient).emit('recieive-message', {
                recipients: NewRecipient, sender: id, text
            })
        }) 
    })
})