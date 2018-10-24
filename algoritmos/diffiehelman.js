const crypto = require('crypto');
const assert = require('assert');

// Generate Alice's keys...
const alice = crypto.createDiffieHellman(2048);
const aliceKey = alice.generateKeys();

// Generate Bob's keys...
const bob = crypto.createDiffieHellman(alice.getPrime(), alice.getGenerator());
const bobKey = bob.generateKeys();

// Exchange and generate the secret...
const aliceSecret = alice.computeSecret(bobKey);
const bobSecret = bob.computeSecret(aliceKey);

console.log(`Alice= ${aliceSecret.toString('hex')} \n`);
console.log(`Bob = ${bobSecret.toString('hex')}`);


// OK
assert.strictEqual(aliceSecret.toString('hex'), bobSecret.toString('hex'));
