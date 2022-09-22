const express = require("express")
const server = express()
const myRouter = express.Router()

server.set("views", __dirname + "/views")
server.set("view engine", "pug")

myRouter.route("/").get((req, res) => {
  res.render("page2", {
    myPet: "국희",
    myName: "강성민",
    myFood: "치킨",
    myStar: "<span>내가 좋아하는 연예인은 릴보이</span>"
  })
})

myRouter.route("/control").get((req, res) => {
  res.render("page3", {
    animals: ["호랑이", "독수리", "오징어"],
    cafes: ["스타벅스", "이디야", "파스구찌"],
    isGood: true
  })
})

myRouter.route("/copy").get((req, res) => {
  res.render("page4")
})

server.use("/", myRouter)

server.listen(4000, () => console.log("PORT 4000 ON!!"))