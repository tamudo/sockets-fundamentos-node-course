var socket = io();

socket.on('connect', () => {
    console.log('Conectado al servidor');
});

//Escuchar sucesos
socket.on('disconnect', () => {
    console.log('Perdido al servidor ');
});

// Enviar info
// nombre evento, objeto y funcion a ejecutar con todo ok
socket.emit('enviarMensaje', {
    usuario: 'Pepe',
    mensaje: 'Hola'
}, (resp) => {
    console.log('respuesta server:', resp);
});

//Escuchar informacion
socket.on('enviarMensaje', (mensaje) => {
    console.log(mensaje);
});