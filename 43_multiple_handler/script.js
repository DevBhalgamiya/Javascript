<<<<<<< HEAD
let p1 = new Promise((resolve, reject)=>{
    // alert("Hey I am not resolved")
    setTimeout(()=>{
      resolve(1)
    }, 2000)
  })
  
  p1.then(()=>{
    console.log("Hurray")
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{
        resolve(4)
      }, 6000)
    })
  }).then((value)=>{
    console.log(value)
  })
  
  p1.then(()=>{
    console.log("Congratulations this promise is resolved")
  })
  
=======
let p1 = new Promise((resolve, reject)=>{
    // alert("Hey I am not resolved")
    setTimeout(()=>{
      resolve(1)
    }, 2000)
  })
  
  p1.then(()=>{
    console.log("Hurray")
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{
        resolve(4)
      }, 6000)
    })
  }).then((value)=>{
    console.log(value)
  })
  
  p1.then(()=>{
    console.log("Congratulations this promise is resolved")
  })
  
>>>>>>> 32b50c0124ddc156fbf7a689e4ab4fffecb94375
  