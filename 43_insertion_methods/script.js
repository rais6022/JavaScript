let a = document.getElementsByTagName('div')[0]

// a.innerHTML = a.innerHTML + '<h1>Hellow World!</h1>';

let div = document.createElement('div');
div.innerHTML = '<h1>Hellow World!</h1>';


// a.appendChild(div);  // this is the same as the 'only - append'
// a.append(div);  // yeh method kaam aata hai naye element ko insert karene me or container me aakhir k ander aayega inserted element

// a.prepend(div); // yeh method kaam aata hai naye element ko insert karene me or container me shurwat k ander aayega inserted element


// a.before(div); // yeh method kaam aata hai naye element ko insert karne me or yeh element container ke bahar shuruat me hi aa jata hai


// a.after(div); // yeh method kaam aata hai naye element ko insert karne me or yeh element container ke bahar aakhir me aata hai


// a.replaceWith(div); // yeh method kaam aata hai existing container ko hi replace kare ke liye 
