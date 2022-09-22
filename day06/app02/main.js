const express = require("express")
const WebSocket = require("ws")
const http = require("http")
const app = express()



const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.set("views", __dirname + "/views")
app.set("view engine", "pug")

app.use("/static", express.static(__dirname + "/static"))
app.get("/", (req, res) => {
  res.render("index")
})
app.get("/sign", (req, res) => {
  res.render("sign")
})


app.use((req, res) => {
  const userID = req.body
  console.log(userID)
})

const httpServer = http.createServer(app)
const wsServer = new WebSocket.Server({server:httpServer})
// 들어오는 클라이언트들을 다 모으는 배열
const clients = []
let clientNumber = 1

// socket: 연결된 클라이언트 소켓 객체
wsServer.on("connection", (socket) => {
  clients.push(socket) // 손님 추가!
  socket["nickname"] = `CLIENT NO.${clientNumber}`
  clientNumber++
  const myNumber = Math.random()
  socket.on("message", (msg) => {
    clients.forEach((aClient) => {
      aClient.send(`${socket.nickname}: ${msg}`)
    })                  
  })
})


httpServer.listen(3001, () => console.log("RUNNING..."))