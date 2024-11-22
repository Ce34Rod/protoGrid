function loadHeader () {
    const header = document.getElementById("header");
    const isMobile  = window.matchMedia("(max-width: 1000px").matches;

    if(isMobile) {
        header.innerHTML = `<a href="index.html"><img src="CERNlogo.svg" alt="logo" class="logo-img" /></a>
        <div class="dropdown">
            <button onclick="myFunction()" class="dropbtn">Dropdown</button>
            <div id="myDropdown" class="dropdown-content">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
            </div>`
    }
}
window.addEventListener("load", loadHeader);



// Slide Show
const slideshowImages = document.querySelectorAll(".slideshow-img");
const nextImageDelay = 4000;
let currentImageCounter = 0;
setInterval(nextImage, nextImageDelay);
slideshowImages[currentImageCounter].style.opacity = 1;

function nextImage() {
    slideshowImages[currentImageCounter].style.opacity = 0;
    currentImageCounter = (currentImageCounter + 1) % slideshowImages.length;
    slideshowImages[currentImageCounter].style.opacity = 1;
}


function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
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