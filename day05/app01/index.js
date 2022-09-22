const express = require("express")
const app = express()

// post 요청 처리하기
const bodyParser = require("body-parser")

// 요청 객체가 중첩된 경우에도 인코딩을 하냐? false
app.use(bodyParser.urlencoded({extended:false}))
// 객체 해석시 JSON 형태를 기본으로 한다
app.use(bodyParser.json())

app.use((req, res) => {
  const {userid, userpw} = req.body
  res.send(`당신의 아이디는 ${userid}이고, 비밀번호는 ${userpw}네요!`)
})

app.listen(4003, () => console.log("4003번 포트에서 서버 구동 중!"))