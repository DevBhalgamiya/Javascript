let num = [3, 5, 1, 2, 4]

// for(let i=0; i<num.length; i++){
//   console.log(num[i])
// }

//ForEach Loop
num.forEach((element)=>{
  console.log(element*element)
})

// Array.from  -- This method convert string to array
let name = "Cherry"
let arr = Array.from(name)
console.log(arr)

//  for...of   -- it gives values of object
for (let item of num){
  console.log(item)
}

//  for...in   -- it gives key of object
/*

for (let i in num){
  console.log(i)
}*/
for (let i in num){
  console.log(num[i])
}