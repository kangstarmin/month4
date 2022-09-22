// 구조 분해는 기본적으로 복사이다. 따라서 원본을 훼손하지 않는다.
const pet = {
  dog: "강아지",
  cat: "고양이"
}

const { dog:d, cat:c } = pet
console.log(d, c)

const cafe = ["스타벅스", "커피빈", "이디야"]

let [star, bean, ediya] = cafe
console.log(star, bean, ediya)


const sm5 = "에스엠파이브"
const ray = "레이"

const car = {
  sm5, ray
}

console.log(car)
