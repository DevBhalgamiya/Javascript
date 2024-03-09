<<<<<<< HEAD
class Employee {
    constructor(name) {
      console.log(`${name} - Employee's constructor is here`)
      this.name = name
    }
  
    login() {
      console.log(`Employee has logged in`);
    }
  
    logout() {
      console.log(`Employee has logged out`);
    }
  
    requestLeaves(leaves) {
      console.log(`Employee has requested ${leaves} leaves - Auto approved`)
    }
  }
  
  class Programmer extends Employee {
    constructor(name) {
      super(name)
      console.log(`${name} - Programmer's constructor is here. This is newly written constructor`)
      this.name = name
    }
    // constructor(...args){  ----> If there is no constructor in the child class, this is created automatically
    //   super(...args)
    // }
  
    requestCoffee(x) {
      console.log(`Employee has requested ${x} coffees`)
    }
  
    requestLeaves(leaves) {
      // console.log(`Employee has requested ${leaves + 1} leaves (One extra)`)
      super.requestLeaves(4)
      console.log("One extra is granted")
    }
  }
  
  let e = new Programmer("Cherry")
  e.login()
=======
class Employee {
    constructor(name) {
      console.log(`${name} - Employee's constructor is here`)
      this.name = name
    }
  
    login() {
      console.log(`Employee has logged in`);
    }
  
    logout() {
      console.log(`Employee has logged out`);
    }
  
    requestLeaves(leaves) {
      console.log(`Employee has requested ${leaves} leaves - Auto approved`)
    }
  }
  
  class Programmer extends Employee {
    constructor(name) {
      super(name)
      console.log(`${name} - Programmer's constructor is here. This is newly written constructor`)
      this.name = name
    }
    // constructor(...args){  ----> If there is no constructor in the child class, this is created automatically
    //   super(...args)
    // }
  
    requestCoffee(x) {
      console.log(`Employee has requested ${x} coffees`)
    }
  
    requestLeaves(leaves) {
      // console.log(`Employee has requested ${leaves + 1} leaves (One extra)`)
      super.requestLeaves(4)
      console.log("One extra is granted")
    }
  }
  
  let e = new Programmer("Cherry")
  e.login()
>>>>>>> 32b50c0124ddc156fbf7a689e4ab4fffecb94375
  e.requestLeaves(3)