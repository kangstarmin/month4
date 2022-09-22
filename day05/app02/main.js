const express = require("express")
const app = express()

// 라우팅 처리 객체
const myRouter = express.Router()
const dogRouter = express.Router()

dogRouter.route("/").get((req, res) => {
  res.send("퍼그냐 시바견이냐 그것이 문제로다!")
})
dogRouter.route("/pug").get((req, res) => {
  res.send("https://images.dog.ceo/breeds/pug/n02110958_2410.jpg")
})
dogRouter.route("/shiba").get((req, res) => {
  res.send("https://images.dog.ceo/breeds/shiba/shiba-3i.jpg")
})

myRouter.route("/").get((req, res) => {
  res.send("국내냐 해외냐 그것이 문제로다!")
})
myRouter.route("/sise").get((req, res) => {
  res.send("국내증시 페이지로 오셨네요!")
})
myRouter.route("/world").get((req, res) => {
  res.send("WELCOME TO WORLD FINANCE!")
})

// 루트 경로에서는 myRouter를 사용한다!
app.use("/", myRouter)
app.use("/dog", dogRouter)

app.listen(4005, () => console.log("4005번 포트에서 서버 구동 중!!"))