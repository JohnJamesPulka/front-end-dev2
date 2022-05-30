var slideIndex =0;
carousel();

function carousel(){
    var i;
    var x = document.getElementsByClassName('myslides');
    for (i = 0; i < x.length; i++){
        x[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex> x.length) { slideIndex = 1}
    x[slideIndex-1].style.display = "block";
    setTimeout(carousel, 2000);
}


/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */


function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function showSubMenu() {
  document.getElementById("myHtml").classList.toggle("show");
}

function Function() {
  document.getElementById("myCss").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
