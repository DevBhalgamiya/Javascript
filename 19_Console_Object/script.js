console.log("console")
console.error("This is as an error")
console.warn("please don't drink black soda")
console.info("It is just information")
// console.clear() -- To clear console
console.assert(5>53)
console.assert(555>53)
obj = {a: 1, b: 2, c: 3}
console.table(obj)
console.table(console)
console.time("a")
console.timeEnd("a")

console.time("forLoop")
for(let i=0; i<5; i++){
  console.log(223)
}
console.timeEnd("forLoop")

console.time("whileLoop")
let i=0;
while(i<5){
  console.log(223);
  i++
}
console.timeEnd("whileLoop")