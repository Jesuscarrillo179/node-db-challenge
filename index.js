const server = require('./api/server')

const PORT = 5000;

server.listen(PORT, () => {
    console.log(`SERVER RUNNING ON ${PORT}`)
})