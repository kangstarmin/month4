// 클라이언트에서 웹소켓 객체를 만들면, 이를 이용해 웹 소켓 서버에 연결 가능!
const socket = new WebSocket("ws://localhost:3001")

const form = document.querySelector("form")
const ul = document.querySelector("ul")
const myNumber = Math.random()
let isMyNumber = false

form.addEventListener("submit", (e) => {
  e.preventDefault()
  const input = form.querySelector("input")
  socket.send(input.value)
  input.value = ""
})

socket.addEventListener("message", (message) => {
  const li = document.createElement("li")
  li.classList.add
  li.textContent = message.data
  ul.appendChild(li)
})
socket.addEventListener("open", (a) => {
  
})