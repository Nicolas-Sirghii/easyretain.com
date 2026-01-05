/* 
Project Name: Modern Portfolio Website
Description: A complete responsive modern portfolio website design
             by using HTML CSS and Vanilla JavaScript from scratch.
Author: Md Al Amin Hossen
Github: https://github.com/MdRasen
License: MIT License
Copyright: 2023 ©MdRasen 
*/

// Typing animation
var typed = new Typed(".typing", {
  strings: [
    "",
    "Web",
    "Web Developer",
  ],
  typeSpeed: 100,
  BackSpeed: 60,
  loop: true,
});

// Aside
const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"),
  totalNavList = navList.length,
  allSection = document.querySelectorAll(".section"),
  totalSection = allSection.length;

for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector("a");
  a.addEventListener("click", function () {
    for (let k = 0; k < totalSection; k++) {
      allSection[k].classList.remove("back-section");
    }
    //Loop for removing active class
    for (let j = 0; j < totalNavList; j++) {
      if (navList[j].querySelector("a").classList.contains("active")) {
        allSection[j].classList.add("back-section");
      }
      navList[j].querySelector("a").classList.remove("active");
    }
    //Adding active class
    this.classList.add("active");
    showSection(this); //Function call
    //Nav click event - Hiding the nav menu
    if (window.innerWidth < 1200) {
      asideSectionTogglerBtn();
    }
  });
}
function showSection(element) {
  //Loop for removing active class
  for (let k = 0; k < totalSection; k++) {
    allSection[k].classList.remove("active");
  }
  const target = element.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active");
}

//For Hire me section
document.querySelector(".hire-me").addEventListener("click", function () {
  showSection(this);
  updateNav(this);
});

function updateNav(element) {
  for (let i = 0; i < totalNavList; i++) {
    navList[i].querySelector("a").classList.remove("active");
    const target = element.getAttribute("href").split("#")[1];
    if (
      target ===
      navList[i].querySelector("a").getAttribute("href").split("#")[1]
    ) {
      navList[i].querySelector("a").classList.add("active");
    }
  }
}

//For Nav Toggler Button
const navTogglerBtn = document.querySelector(".nav-toggler"),
  aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () => {
  asideSectionTogglerBtn();
});

function asideSectionTogglerBtn() {
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
}
//....................................................................................................
// for sending a message





const popup = document.getElementById("popup");
const popupClose = document.getElementById("popup-close");

function showPopup(message) {
  document.getElementById("popup-message").innerText = message;
  popup.classList.add("show");

  // auto-close after 5 seconds
  setTimeout(() => {
    popup.classList.remove("show");
  }, 5000);
}

// close when clicking the close button
popupClose.addEventListener("click", () => {
  popup.classList.remove("show");
});



const sendBtn = document.querySelector(".send-message");

sendBtn.addEventListener("click", (e) => {
  e.preventDefault();

   sendBtn.classList.add("shrink");
    setTimeout(() => sendBtn.classList.remove("shrink"), 100); // back to normal

  const inputs = document.querySelectorAll(".contact-form .form-control");

  const params = {
    name: inputs[0].value.trim(),
    email: inputs[1].value.trim(),
    subject: inputs[2].value.trim(),
    message: inputs[3].value.trim(),
  };

    emailjs
  .send("service_j3qd9g5", "template_u4j40i1", params)
  .then(() => {
    showPopup("Thank you for reaching out! I will reply as soon as possible.");
    inputs.forEach(input => input.value = "");
  })
  .catch((error) => {
    console.error("EmailJS error:", error);
    showPopup("Oops! Something went wrong. Please try again.");
  });

});

