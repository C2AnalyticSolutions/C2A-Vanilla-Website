function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}


//Scroll(comming soon...)
// var prevScrollPos = window.pageYOffset;
// var stickyNav = document.getElementById('sticky-nav');

// window.addEventListener('scroll', function() {
//     var currentScrollPos = window.pageYOffset;
    
//     if (currentScrollPos > prevScrollPos) {
//         // Scrolling down, hide the sticky navigation
//         stickyNav.style.display = 'none';
//     } else {
//         // Scrolling up, show the sticky navigation
//         stickyNav.style.display = 'block';
//     }
    
//     prevScrollPos = currentScrollPos;
// });



// Get the button: (go to top settings)
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//adjust the vbideo container to fit it's container without expanding past it
  window.addEventListener("load", function() {
    // Get references to the video and container elements
    const video = document.querySelector(".article-container video");
    const container = document.querySelector(".article-container");

    // Calculate the container's height based on the video's aspect ratio
    const videoAspectRatio = video.videoWidth / video.videoHeight;
    const containerWidth = container.offsetWidth;
    const containerHeight = containerWidth / videoAspectRatio;

    // Set the container's height
    container.style.height = `${containerHeight}px`;
  });


