$(document).ready(function(){
  console.log('Hi there! I\'m a console.log()');
});

var x = "I'm a variable"

x

document.getElementById("do-something-button").addEventListener("click", displayDate);

function displayDate() {
    document.getElementById("show-it").innerHTML = Date();
}

// this indicates the dropdown status
var dropdown_status = document.getElementById('navbarDropdownMenuLink').attributes[5].nodeValue

// the path of the current page (basically the file name)
var current_path = window.location.pathname.split('/').slice(-1).toString();
