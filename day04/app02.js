// 내장 모듈은 경로 없이 이름만 쓰면 된다!
const http = require("http")
const server = http.createServer((request, response) => {
  response.write("Hello, My Client!!")
  response.end()
})


// 포트 번호 지정 및 서버 구동을 하는 메서드!
server.listen(8000, () => {
  console.log("서버가 구동되었습니다!")
})