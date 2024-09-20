const server = require("http")
const app = require("./app")

server.createServer(app).listen(3000)