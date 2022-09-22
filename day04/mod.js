function sayGoodbye(){
  console.log("오늘 금요일이네?! 이번주야 잘가~")
}

function sum(n1, n2){
  console.log(n1 + n2)
}
function sayNames(n1, n2){
  console.log(`${n1} 그리고 ${n2}`)
}
// sayGoodbye 를 외부로 내보내겠다!
module.exports = {sayGoodbye, sum, sayNames}