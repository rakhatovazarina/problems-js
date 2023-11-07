function callbackExec(callback) {
  setTimeout(callback, 2000); 
}

function displayHello() {
  console.log('Hello');
}

callbackExec(displayHello); 
