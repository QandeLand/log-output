const crypto = require('crypto');
const id = crypto.randomUUID();
setInterval(() => console.log(`${new Date().toISOString()}: ${id}`), 5000);