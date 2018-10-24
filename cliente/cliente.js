/* Or use this example tcp client written in node.js.  (Originated with 
example code from 
http://www.hacksparrow.com/tcp-socket-programming-in-node-js.html.) */

const net = require('net');
const client = new net.Socket();
const readline = require('readline');
const openssl = require('../algoritmos/mdservice');
var id=-1;

// const info = 'Data to be hashed';

//Creo la interfaz que se encargará de leer los datos en consola.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Le proveo al cliente el puerto y la direccion en donde se tiene que conectar.
client.connect(3000, '127.0.0.1', function () {
    console.log('||||  Connectado al Servidor  |||||');
});

//Mando un solo dato y cierro la conexión.
rl.on('line', (input) => {
    // const hashedInfo = crypto.createHash('sha256').update(input).digest('hex');
    const hashedInfo = openssl.sha256(input);
    console.log(`Mensaje Original... => ${input}`);
    client.write(input);
    client.write(hashedInfo);

    //client.end();
});

//Cada vez que se envien o reciban datos, imprimirlos en consola.
client.on('data', function (data) {
    id++;
    console.log(`ID: ${id}`);
    console.log(`Información recibida/enviada: ${data} \n`);
});

//Cuando se cierre la conexión imprimir mensaje.
client.on('close', function () {
    console.log(`Se cerró la conexión`);
});

