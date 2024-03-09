<<<<<<< HEAD
const loadscript = (src)=>{
    return new Promise((resolve,reject) => {
    let script = document.createElement("script")
    script.type = "text/javascript"
    script.src = src
    document.body.appendChild(script)
    script.onload = () => {
      resolve("Script has been loaded sir")
    }
      script.onerror = ()=>{reject(0)}
    })
  }
  let p1 = loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js")
  p1.then((value)=>{
    console.log(value)
    return loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js")
  }).then((value) => {
    console.log("Second script ready")
  }).catch((error)=>{
    console.log("We are sorry but we are having problems loading this script")
=======
const loadscript = (src)=>{
    return new Promise((resolve,reject) => {
    let script = document.createElement("script")
    script.type = "text/javascript"
    script.src = src
    document.body.appendChild(script)
    script.onload = () => {
      resolve("Script has been loaded sir")
    }
      script.onerror = ()=>{reject(0)}
    })
  }
  let p1 = loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js")
  p1.then((value)=>{
    console.log(value)
    return loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js")
  }).then((value) => {
    console.log("Second script ready")
  }).catch((error)=>{
    console.log("We are sorry but we are having problems loading this script")
>>>>>>> 32b50c0124ddc156fbf7a689e4ab4fffecb94375
  })