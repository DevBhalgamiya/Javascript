<<<<<<< HEAD
let p = fetch("https://goweather.herokuapp.com/weather/Ny")
p.then((response) => {
  console.log(response.status)
  console.log(response.ok)
  console.log(response.headers)
  return response.json()
}).then((value2) => {
  console.log(value2)
=======
let p = fetch("https://goweather.herokuapp.com/weather/Ny")
p.then((response) => {
  console.log(response.status)
  console.log(response.ok)
  console.log(response.headers)
  return response.json()
}).then((value2) => {
  console.log(value2)
>>>>>>> 32b50c0124ddc156fbf7a689e4ab4fffecb94375
})