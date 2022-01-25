$(".toggleContainer").click(function () {
  $(".bar").toggleClass("active");
});

let navChange = document.querySelector("nav");
let logo = document.querySelector(".logo a");
let linkdInIcon = document.querySelector(".media-icons .fa-linkedin");
let gitHubIcon = document.querySelector(".media-icons .fa-github");

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 25) {
    navChange.classList.add("colorNav");
    logo.style.color = "#fff";
    linkdInIcon.classList.add("media");
    gitHubIcon.classList.add("media");
  } else {
    navChange.classList.remove("colorNav");
    logo.style.color = "#f39507";
    linkdInIcon.classList.remove("media");
    gitHubIcon.classList.remove("media");
  }
});



let hamBurger = document.querySelector(".bar");
let navBar = document.querySelector("nav");
let icn = document.querySelector(".media-icons");
let menu = document.querySelector(".menu");

hamBurger.addEventListener("click", function () {
  navBar.classList.toggle("h-nav-resp");
  menu.classList.toggle("invisible-resp");
  icn.classList.toggle("invisible-resp");
  navBar.classList.toggle("nav-height");
  // menu.classList.
});

let items = document.querySelector(".menu");
let med = document.querySelector(".media-icons");















// Form Section Starts



function formValidation() {


  // Username Validation 

  let userNameVal = document.getElementById("userName").value;
  if (userNameVal.length == "") {
    document.getElementById("user1").innerHTML = "*Username field can not be empty !"
  } else if (userNameVal.length < 3) {
    document.getElementById("user1").innerHTML = "*Username should be greater than 2 char !"
  } else {
    document.getElementById("user1").innerHTML = "";
  }

  //Mail Validation

  let userMailVal = document.getElementById("userMail").value;
  let atIndex = userMailVal.indexOf("@");
  let dotIndex = userMailVal.lastIndexOf(".");



  if (userMailVal.length == "") {
    document.getElementById("user2").innerHTML = " * Email field can not be blancked !";
  } else if (atIndex <= 1) {  
    document.getElementById("user2").innerHTML = " * Invalid Eamil entered !"
  } else if (dotIndex >= userMailVal.length - 2) {
    document.getElementById("user2").innerHTML = " * Invalid Eamil entered !";
  } else if (dotIndex <= atIndex + 3) {
    document.getElementById("user2").innerHTML = " * Invalid Email entered !";
  } else {
    document.getElementById("user2").innerHTML = "";
  }



  // subject validation

  let subVal = document.getElementById("sub").value;
  if (subVal.length == "") {
    document.getElementById("user3").innerHTML = "* Subject field can't be empty!";
  } else if (subVal.length <= 7) {
    document.getElementById("user3").innerHTML = "* Minimum required 8 char";
  } else {
    document.getElementById("user3").innerHTML = "";
  }




  // Message Validation

  let msgVal = document.getElementById("msg").value;
  if (msgVal.length == "") {
    document.getElementById("user4").innerHTML = "*Message field can not be empty !"
  } else if (msgVal.length <= 15) {
    document.getElementById("Minimum required 15 char !");
  } else {
    document.getElementById("user4").innerHTML = "";
  }

  return false;
}




