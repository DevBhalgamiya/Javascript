// const regx = /very/g
// const text = "Harry is a very very nice awesome nice very boy"
// console.log(text.replace(regx, "VERY"))

const regx = /(Harry){2}/gi
const text = "Harryharry is a very very nice awesome nice very boy"
console.log(text.replace(regx, "VERY"))