const { io } = require('../server');

io.on('connection', (client) => {
    console.log('User connected');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta app'
    });

    client.on('disconnect', () => {
        console.log('User disconnected');
    });

    //Escuchar cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        //client.emit('enviarMensaje', data);
        client.broadcast.emit('enviarMensaje', data);

        /*
            if (mensaje.usuario) {
                callback({
                    respuesta: 'Todo ok'
                });
            } else {
                callback({
                    respuesta: 'Todo nok'
                });
            }
        */
    });
});