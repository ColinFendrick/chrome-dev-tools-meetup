$(document).ready(function(){
  console.log('Hi there! I\'m a console.log()');
});

var x = "I'm a variable"

x

document.getElementById("do-something-button").addEventListener("click", displayDate);

function displayDate() {
    document.getElementById("show-it").innerHTML = Date();
}
