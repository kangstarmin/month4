const express = require("express")
const app = express()
const myRouter = express.Router()

// 정적 문서를 제공하는 경로를 따로 지정하기
app.use("/page", express.static(__dirname + "/views/index.html"))

myRouter.route("/").get((req, res) => {
  // res.sendFile()
  // __dirname: 프로젝트 폴더의 경로를 나타내는 노드 시스템 변수
  res.sendFile(__dirname + "/views/index.html")
})

app.use("/", myRouter)

app.listen(4002, () => console.log("4002번 포트에서 서버 구동 중!!"))