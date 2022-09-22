const express = require("express")
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

module.exports = dogRouter