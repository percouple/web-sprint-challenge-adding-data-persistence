// start your server here
const dotenv = require('dotenv');
dotenv.config();

const server = require('./api/server');

const port = process.env.PORT || 3000;

server.listen(port, () => {
    console.log(`
    *** Server listening on port ${port} ***
    `)
})