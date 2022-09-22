var app = require("express")()
var server = require("http").createServer(app)
var io = require("socket.io")(server)

app.set("view engine", "ejs")
app.set("views", __dirname + "/views")


app.get("/", (req, res) => {
  res.render("index")
})

io.on("connection", (socket) => {
  socket.emit("usercount", io.engine.clientsCount)
  
  socket.on("message", (msg) => {
    console.log("Message received" + msg)

    io.emit("message", msg)
  })
})

server.listen(3000, () => {
  console.log("3000 ON")
})