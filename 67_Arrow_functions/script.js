const sayHello = name => {
    console.log("greeting" + " " + name)
    console.log("hi")
  }
  const x = {
    name: "Cherry",
    role: "Js Developer",
    exp: 30,
    show: function() {
      // let that = this 
      // console.log(this)
      setTimeout(() => {
        console.log(`The name is ${this.name}\nThe role is ${this.role}`)
      }, 2000)
    }
  }
  sayHello("Cherry", "Good Afternoon")
  // console.log(x.name, x.exp)
  // x.show()