<<<<<<< HEAD
let a = () => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(456)
    }, 4000)
  })
  }
  
  // let f = async () => {
  //   let b = await a()
  //   console.log(b)
  //   let c = await a()
  //   console.log(c)
  //   let d = await a()
  //   console.log(d)
  // }
  // f()
  
  (async () => {
    let b = await a()
    console.log(b)
    let c = await a()
    console.log(c)
    let d = await a()
    console.log(d)
=======
let a = () => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(456)
    }, 4000)
  })
  }
  
  // let f = async () => {
  //   let b = await a()
  //   console.log(b)
  //   let c = await a()
  //   console.log(c)
  //   let d = await a()
  //   console.log(d)
  // }
  // f()
  
  (async () => {
    let b = await a()
    console.log(b)
    let c = await a()
    console.log(c)
    let d = await a()
    console.log(d)
>>>>>>> 32b50c0124ddc156fbf7a689e4ab4fffecb94375
  }) ()