<<<<<<< HEAD
// Callbacks
function loadScript(src, callback) {
    var script = document.createElement("script");
    script.src = src;
    script.onload = function() {
      console.log("Loaded script with SRC:" + src);
      callback(null, src);
    }
    script.onerror = function() {
      console.log("Error loading script with SRC:" + src);
      callback(new Error("Src got some error"))
    }
    document.body.appendChild(script);
  }
  
  function hello(error, src){
    if(error){
      console.log(error)
      return
    }
    alert('Hello World!' + src);
  }
  
  function goodmorning(error, src){
    if(error){
      console.log(error)
      return
    }
    alert('Good morning' + src);
  }
  // loadScript("https://cdn.jsdefgdlivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js", goodmorning)
=======
// Callbacks
function loadScript(src, callback) {
    var script = document.createElement("script");
    script.src = src;
    script.onload = function() {
      console.log("Loaded script with SRC:" + src);
      callback(null, src);
    }
    script.onerror = function() {
      console.log("Error loading script with SRC:" + src);
      callback(new Error("Src got some error"))
    }
    document.body.appendChild(script);
  }
  
  function hello(error, src){
    if(error){
      console.log(error)
      return
    }
    alert('Hello World!' + src);
  }
  
  function goodmorning(error, src){
    if(error){
      console.log(error)
      return
    }
    alert('Good morning' + src);
  }
  // loadScript("https://cdn.jsdefgdlivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js", goodmorning)
>>>>>>> 32b50c0124ddc156fbf7a689e4ab4fffecb94375
  loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js", goodmorning)