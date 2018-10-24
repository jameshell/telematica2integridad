const net = require('net');
const openssl = require('../algoritmos/mdservice');
var id=0;

//Creo el socket y adjunto los eventos que se llevaran adentro de socket.
const server = net.createServer(function (socket) {
    //Se manda información al servidor para ver que efectivamente se realizo la conexión.
    socket.write('Echo server\r\n');
    socket.pipe(socket);
    //Si se reciben datos... imprimirlos en consola.
    socket.on('data', (data) => {
        let msgReceived;
        id++;
        console.log(`ID: ${id}`);
        console.log(`Datos obtenidos: ${data} \n`);

        if(id===1){
            hashReceived=data;  
        } else if(id===2){
            msgReceived=data;
            let hashOperation = openssl.sha256(msgReceived);
            console.log(`Paquete Completo: ${hashOperation}`);
            
        }
        
    //WTFFF?
    //console.log(`Datos obtenidos: ${data.toString('utf8')}`);
    });
});
//Le proveo al servidor en que puerto y dirección lanzar el servicio.
server.listen(3000, '127.0.0.1');
