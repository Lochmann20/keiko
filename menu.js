const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
const menu = document.querySelector(".menu");
const links = document.querySelectorAll(".menu li a");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    burger.classList.remove("active");
    nav.classList.remove("active");
  });
});

/***************COPY DISCOUNTCODE ***************'*/
function CopyToClipboard(containerid) {
  var btnCopy = document.getElementById("copy");
  var main = document.getElementById("maincontent");
  // Create a new textarea element and give it id='temp_element'
  var textarea = document.createElement("textarea");
  textarea.id = "temp_element";
  // Optional step to make less noise on the page, if any!
  textarea.style.height = 0;
  // Now append it to your page somewhere, I chose <body>
  document.body.appendChild(textarea);
  // Give our textarea a value of whatever inside the div of id=containerid
  textarea.value = document.getElementById(containerid).innerText;
  // Now copy whatever inside the textarea to clipboard
  var selector = document.querySelector("#temp_element");
  selector.select();
  document.execCommand("copy");
  // Remove the textarea
  document.body.removeChild(textarea);
  // Add copied text after click
  if (document.execCommand("copy")) {
    btnCopy.classList.add("copied");

    var temp = setInterval(function () {
      btnCopy.classList.remove("copied");
      clearInterval(temp);
    }, 600);
  } else {
    console.info("document.execCommand went wrong…");
  }
}
