
/* const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("하하")
    resolve("성공")
  }, 2000)
})

// then : 성공 시 반응할 핸들러 지정
p.then((resolveData) => {
  console.log(resolveData)
}) */

// https://dog.ceo/api/breeds/image/random

const button = document.getElementById("push")
const img = document.getElementById("dog")

const p = new Promise((resolve, reject) => {
  const request = new XMLHttpRequest()
  request.open("GET", "https://dog.ceo/api/breeds/image/random")
  request.addEventListener("load", () => {
    if(request.status == 200){
      resolve(request.responseText)
    }else{
      reject("요청 실패!")
    }
  })
  request.send()
})

button.addEventListener("click", () => {
  p.then((resolveData) => {
    const data = JSON.parse(resolveData)
    const src = data.message
    img.src = src
  }).catch((rejectData) => {
    console.log(rejectData)
  })
})