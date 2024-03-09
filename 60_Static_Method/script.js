<<<<<<< HEAD
class Animal{
    constructor(name){
      this.name = Animal.capitalize(name)
    }
    walk() {
      alert("Animal " + this.name + " is walking")
    }
    static capitalize(name){
      return name.charAt(0).toUpperCase() + name.substr(1, name.length)
    }
  }
  
  j = new Animal("jack")
  j.walk()
=======
class Animal{
    constructor(name){
      this.name = Animal.capitalize(name)
    }
    walk() {
      alert("Animal " + this.name + " is walking")
    }
    static capitalize(name){
      return name.charAt(0).toUpperCase() + name.substr(1, name.length)
    }
  }
  
  j = new Animal("jack")
  j.walk()
>>>>>>> 32b50c0124ddc156fbf7a689e4ab4fffecb94375
  // conaole.log(j.capitalize("thisa")) ---> this doesn't work