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

var dropdown = document.getElementById('navbarDropdownMenuLink')
var little_arrow = document.getElementsByClassName('fa-chevron-down')

dropdown.addEventListener("click", rotate);

function rotate() {
  // console.log('this fired')
  if ($(little_arrow).hasClass('rotate-one-eighty')) {
    // console.log("if == true")
      // $(little_arrow).removeClass('rotate-one-eighty');
      $(little_arrow).toggleClass('rotate-back-one-eighty');
  } else {
    // console.log("if == false")
      $(little_arrow).toggleClass('rotate-one-eighty');
      // $(little_arrow).removeClass('rotate-back-one-eighty');
  }
  // $(little_arrow).toggleClass("rotate-one-eighty");
}
