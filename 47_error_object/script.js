<<<<<<< HEAD
try{
    let age = prompt("Enter your age")
    age = Number.parseInt(age)
    if(age>150){
    throw new ReferenceError("This is probably not true")
    }
  }catch(error){
    console.log(error.name)  
    console.log(error.message)  
    console.log(error.stack)  
  }
  
=======
try{
    let age = prompt("Enter your age")
    age = Number.parseInt(age)
    if(age>150){
    throw new ReferenceError("This is probably not true")
    }
  }catch(error){
    console.log(error.name)  
    console.log(error.message)  
    console.log(error.stack)  
  }
  
>>>>>>> 32b50c0124ddc156fbf7a689e4ab4fffecb94375
  console.log("The script is still running")