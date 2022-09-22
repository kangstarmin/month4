
// 함수의 정의(함수 선언)
const sayMyName = () => {
  console.log("내 이름은 강성민")
}

// 함수 호출
sayMyName()

const sayYourName = n => {
  console.log("너의 이름은 " + n)
}

// 또 다른 특징 : 반환값이 아닌 실행문이 한줄이어도 중괄호 생략 가능
const sayYourNames = (n1="강", n2="김") => console.log(n1 + n2)

sayYourName("박지성")
sayYourNames("이", "박")