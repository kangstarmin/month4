const express = require("express")
const app = express()

app.use((req, res) => {
  res.send("HELLO!!")
})

const handleListening = () => console.log("Now I am Listening on 4000")
app.listen(4000, handleListening)