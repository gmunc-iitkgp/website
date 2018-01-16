window.onscroll = function() {myFunction()};
var navbar = document.getElementById("menubar");
var sticky = navbar.offsetTop;
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
function openDay(evt, dayName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(dayName).style.display = "grid";
    evt.currentTarget.className += " active";
}
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}
window.sr = ScrollReveal({ duration: 1000 });
sr.reveal('.header');
sr.reveal('.icon', {delay: 500});
sr.reveal('.menu', {delay: 1000});
sr.reveal('.intro');
sr.reveal('.announcement');
sr.reveal('.image-box');
sr.reveal('.button-wrapper');
