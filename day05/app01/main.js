const express = require("express")
const app = express()

// get 요청으로 전달된 값을 읽어보자!
app.use((req, res) => {
  const {userid, userpw} = req.query
  res.send(`당신의 아이디는 ${userid}이고, 비밀번호는 ${userpw}네요!`)
})

app.listen(4003, () => console.log("4003번 포트에서 서버 구동 중!"))