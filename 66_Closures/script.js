<<<<<<< HEAD
// function init() {
//   var name = "Mozilla"; // name is a local variable created by init
//   function displayName() {
//     // displayName() is the inner function, a closure
//     console.log(name);
//   }
//   name = "Harry"
//   return displayName;
// }
// let c = init();
// c()

function returnFunc() {
    const x = () => {
      let a = 1
      console.log(a)
      const y = () => {
        let a = 2
        console.log(a)
        const z = () => {
          let a = 3
          console.log(a)
        }
        z()
      }
      a = 999
      y()
    }
    return x
  }
  
  let a = returnFunc()
=======
// function init() {
//   var name = "Mozilla"; // name is a local variable created by init
//   function displayName() {
//     // displayName() is the inner function, a closure
//     console.log(name);
//   }
//   name = "Harry"
//   return displayName;
// }
// let c = init();
// c()

function returnFunc() {
    const x = () => {
      let a = 1
      console.log(a)
      const y = () => {
        let a = 2
        console.log(a)
        const z = () => {
          let a = 3
          console.log(a)
        }
        z()
      }
      a = 999
      y()
    }
    return x
  }
  
  let a = returnFunc()
>>>>>>> 32b50c0124ddc156fbf7a689e4ab4fffecb94375
  a()