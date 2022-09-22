const express = require("express")
const app = express()

app.use((req, res) => {
  res.send({
    "message": "https://images.dog.ceo/breeds/sheepdog-english/n02105641_11694.jpg",
    "status": "success"
  })
})

handleListening = () => console.log("Now I am Listening on 4000")
app.listen(4000, handleListening)