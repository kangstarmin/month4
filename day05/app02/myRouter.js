const express = require("express")
const myRouter = express.Router()

myRouter.route("/").get((req, res) => {
  res.send("국내냐 해외냐 그것이 문제로다!")
})
myRouter.route("/sise").get((req, res) => {
  res.send("국내증시 페이지로 오셨네요!")
})
myRouter.route("/world").get((req, res) => {
  res.send("WELCOME TO WORLD FINANCE!")
})

module.exports = myRouter