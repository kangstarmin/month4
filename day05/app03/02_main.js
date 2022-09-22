const express = require("express")
const app = express()
const myRouter = express.Router()

// set(항목, 내용): 설정 항목과 설정 내용을 입력하는 메서드
app.set("views", __dirname + "/views") // 뷰의 위치 지정
app.set("view engine", "ejs") // 사용할 뷰 엔진 지정

myRouter.route("/").get((req, res) => {
  // render(): 뷰 엔진을 선택해 제공하는 메서드
  res.render("index", {
    food1: "된장찌개",
    food2: "김치찌개",
    food3: "부대찌개"
  })
})

myRouter.route("/food").get((req, res) => {
  res.render("food", {
    food1: "된장찌개",
    food2: "김치만두",
    food3: "삼겹살",
    food4: "짜장면"
  })
})

app.use("/", myRouter)

app.listen(4002, () => console.log("4002번 포트 서버 구동 중!!"))