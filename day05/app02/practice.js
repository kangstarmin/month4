const express = require("express")
const app = express()

const myRouter = require("./myRouter")
const dogRouter = require("./dogRouter")

app.use("/", myRouter)
app.use("/dog", dogRouter)

app.listen(4008, () => console.log("4008번 포트에서 서버 구동 중!"))