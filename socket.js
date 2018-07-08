const socket = require('socket.io')(1000);

socket.on('connection', (client) => {
    console.log('Novo usuário conectado.');

    client.on('message', (data) => {
        console.log(`Mensagem recebida: ${data}`);
    });
});