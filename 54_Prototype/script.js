<<<<<<< HEAD
let a = {
    name2: "Dev",
    language: "JavaScript",
    run: () =>{
      alert("self run")
    }
  }
  console.log(a)
  
  let p = {
    run: () =>{
      alert("run")
    }
  }
  p.__proto__ = {
    name: "Jackie"
  }
  
  a.__proto__ = p
  a.run()
=======
let a = {
    name2: "Dev",
    language: "JavaScript",
    run: () =>{
      alert("self run")
    }
  }
  console.log(a)
  
  let p = {
    run: () =>{
      alert("run")
    }
  }
  p.__proto__ = {
    name: "Jackie"
  }
  
  a.__proto__ = p
  a.run()
>>>>>>> 32b50c0124ddc156fbf7a689e4ab4fffecb94375
  console.log(a.name)