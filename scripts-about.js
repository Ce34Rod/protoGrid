function loadHeader () {
    const header = document.getElementById("header");

    const isMobile  = window.matchMedia("(max-width: 1000px)").matches;

    if(isMobile) {
        document.body.innerHTML = `
        <div class="grid-container">
        <header class="grid-header" id="header">
        <a href="index.html" class="logo-box"><img src="images/CERNlogo.png" alt="logo" class="logo-img" /></a>
        <div class="dropdown">
            <button onclick="myFunction()" class="dropbtn">| | |</button>
            <div id="myDropdown" class="dropdown-content">
              <a href="about.html">About</a>
              <a href="pricing.html">Pricing</a>
              <a href="more-photos.html">More Photos</a>
            </div>
            </header>
            <div class="main">
            <div class="grid-item image-container-about">
        <img
        class="big-image"
        src="images/cesar0.jpeg"
        alt="Self portrait"/>
    </div>

    <div class="about-text-container">
        <p class="about-text">
            Hi I'm Cesar, <br>  
            I specialize in personal portraits but often do photos for events like engagements, birthdays, graduations, and small weddings. 
            If you are looking for photos for a social media profile picture, dating apps, or just want a picture you look amazing in, you're in the right place! 
            I know from personal experience how daunting it can be to have photos taken of you... It is my #1 priority that you feel attractive and 
            confident in your pictures. Even just one nice photograph of yourself can completely change how you 
            feel about yourself and your online presence - Cesar E. Rodriguez N.
            
            <br>
            <br>
            Email me to set up a time, place, and expectations! Please note that I am not equiped to handle large events or videoagraphy.
        </p>
    </div>
    </div>

      <footer class="grid-footer"><p>CERN Photography &copy; Cesar33Rodriguez@gmail.com</p></footer>
    </div>`
    }
    else {
        document.body.innerHTML = `<div class="grid-container">
      <header class="grid-header" id="header">
        <a class="small-anchor-home" href="index.html">Home</a>
        <a class="small-anchor-about" href="about.html">About</a>
        <a href="index.html"><img src="images/CERNlogo.png" alt="logo" class="logo-img" /></a>
        <a class="small-anchor-pricing" href="pricing.html">Pricing</a>
        <a class="small-anchor-more-photos" href="more-photos.html">More Photos</a>
      </header>


      <div class="grid-item image-container-about">
        <img
        class="big-image"
        src="images/cesar0.jpeg"
        alt="Self portrait"/>
    </div>

    <div class="about-text-container">
        <p class="about-text">
            Hi I'm Cesar, <br> 
            I specialize in personal portraits but often do photos for events like engagements, birthdays, graduations, and small weddings. 
            If you are looking for photos for a social media profile picture, dating apps, or just want a picture you look amazing in, you're in the right place! 
            I know from personal experience how daunting it can be to have photos taken of you... It is my #1 priority that you feel attractive and 
            confident in your pictures. Even just one nice photograph of yourself can completely change how you 
            feel about yourself and your online presence - Cesar E. Rodriguez N.
            <br>
            <br>
            Email me to set up a time, place, and expectations! Please note that I am not equiped to handle large events or videoagraphy.
        </p>
    </div>

      <footer class="grid-footer"><p>CERN Photography &copy; Cesar33Rodriguez@gmail.com</p></footer>
    </div>`
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