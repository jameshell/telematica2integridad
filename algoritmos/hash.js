const crypto = require('crypto');
const hash = crypto.createHash('sha256');

hash.on('readable', ()=>{
    const data = hash.read();
    if(data){
        console.log(`Equivalente en Hash => ${data.toString('hex')}`);
    }
});

let info = 'Some data to hash';
console.log(`Información Original=> ${info}`);
hash.write(info);
hash.end();