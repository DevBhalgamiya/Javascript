<<<<<<< HEAD
let a = document.getElementsByTagName('div')[0]

// a.innerHTML = a.innerHTML + '<h1>Hello World!</h1>';

let div = document.createElement('div');
div.innerHTML = '<h1>Hello World!</h1>';
// a.appendChild(div);
// a.append(div);
// a.prepend(div);
// a.before(div);
// a.after(div);
=======
let a = document.getElementsByTagName('div')[0]

// a.innerHTML = a.innerHTML + '<h1>Hello World!</h1>';

let div = document.createElement('div');
div.innerHTML = '<h1>Hello World!</h1>';
// a.appendChild(div);
// a.append(div);
// a.prepend(div);
// a.before(div);
// a.after(div);
>>>>>>> 32b50c0124ddc156fbf7a689e4ab4fffecb94375
a.replaceWith(div);