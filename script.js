function openTab(evt, tabName) {
  const tabcontent = document.getElementsByClassName("tabcontent");
  const tablinks = document.getElementsByClassName("tablinks");

  // Hide all tab contents
  for (let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
    tabcontent[i].classList.remove("active-tab");
  }

  // Remove active class from all tab links
  for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }

  // Show the selected tab and mark the link as active
  document.getElementById(tabName).style.display = "block";
  document.getElementById(tabName).classList.add("active-tab");
  evt.currentTarget.classList.add("active");
}

// Responsive nav toggle
function myFunction() {
  const nav = document.getElementById("myTopnav");
  if (nav.className === "topnav") {
    nav.className += " responsive";
  } else {
    nav.className = "topnav";
  }
}

// Open default tab on load
window.onload = function () {
  document.getElementById("defaultOpen").click();
};

// This is for the typewriting effect
const titles = ["Web Developer", "Hard-worker", "Eager Beaver", "Creative Coder", "Team Player"];
let index = 0;
let charIndex = 0;
let isDeleting = false;
const speed = 100;
const target = document.getElementById("dynamic-text");

function type() {
  const current = titles[index];
  if (isDeleting) {
    charIndex--;
    target.textContent = current.substring(0, charIndex);
  } else {
    charIndex++;
    target.textContent = current.substring(0, charIndex);
  }

  if (!isDeleting && charIndex === current.length) {
    setTimeout(() => isDeleting = true, 1000);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    index = (index + 1) % titles.length;
  }

  setTimeout(type, speed);
}

type();

