function loadHeader () {
    const header = document.getElementById("header");
    const isMobile  = window.matchMedia("(max-width: 1000px)").matches;

    if(isMobile) {
        header.innerHTML = `<a href="index.html" class="logo-box"><img src="images/CERNlogo.png" alt="logo" class="logo-img" /></a>
        <div class="dropdown">
            <button onclick="myFunction()" class="dropbtn">| | |</button>
            <div id="myDropdown" class="dropdown-content">
              <a href="about.html">About</a>
              <a href="pricing.html">Pricing</a>
              <a href="more-photos.html">More Photos</a>
            </div>`
    }
    else {
        header.innerHTML = `<a class="small-anchor-home" href="index.html">Home</a>
        <a class="small-anchor-about" href="about.html">About</a>
        <a href="index.html" class="logo-box"><img src="images/CERNlogo.png" alt="logo" class="logo-img" /></a>
        <a class="small-anchor-pricing" href="pricing.html">Pricing</a>
        <a class="small-anchor-more-photos" href="more-photos.html">More Photos</a>`
    }
}
window.addEventListener("load", loadHeader);
window.addEventListener("resize", loadHeader);



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