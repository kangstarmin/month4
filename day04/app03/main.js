const express = require("express")
const app = express()
const helloEveryOne = require("./mod")

// next: 다음 미들웨이로 넘어간다는 의미의 함수
app.use((req, res, next) => {
  helloEveryOne()
  next()
})

// 객체 리터럴을 제공하는 응답을 만든다!
// ues(): 미들웨어 추가 메서드
app.use((req, res) => {
  // send(): 다양한 유형의 데이터를 보낼 수 있는 기능을 가진 메서드!
  res.send({
    "message": "https://images.dog.ceo/breeds/sheepdog-english/n02105641_11694.jpg",
    "status": "success"
  })
})


handleListening = () => console.log("Now I am Listening on 4000")
app.listen(4000, handleListening)