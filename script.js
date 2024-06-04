const navToggle = document.querySelector(".navbar_toggle");
const links = document.querySelector(".main_nav");

navToggle.addEventListener("click", function () {
  links.classList.toggle("show_nav");
});

AOS.init();

// type effect
let i = 0;
let txt = 'video editor';
let txt2 = 'graphics designer';
let txt3 = 'forex analyst';
let currentText = txt;
let textArray = [txt, txt2, txt3];
let textIndex = 0;
let speed = 40;

function typeWriter() {
  if (i < currentText.length) {
    document.getElementById("role").innerHTML += currentText.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else {
    if (textIndex < textArray.length - 1) {
      textIndex++;
      currentText = textArray[textIndex];
      i = 0;
      setTimeout(() => {
        document.getElementById("role").innerHTML = '';
        typeWriter();
      }, 1000); // Wait for 1 second before clearing the text and starting the next part
    }
  }
}

typeWriter(); // Start the typewriter effect immediately
