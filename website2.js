
 window.onscroll = function() {
     if (window.pageYOffset + window.innerHeight >= document.body.scrollHeight) {
         document.getElementById("scrollToTopBtn").style.display = "block";
     } else {
         document.getElementById("scrollToTopBtn").style.display = "none";
     }
 };
 function scrollToTop() {
     var c = document.documentElement.scrollTop || document.body.scrollTop;
     if (c > 0) {
         window.requestAnimationFrame(scrollToTop);
         window.scrollTo(0, c - c / 8);
     }
 }

// JavaScript function to open and close the side menu
function openNav() {
 var menu = document.getElementById("mySidenav");
 if (menu.style.width === "250px") {
   menu.style.width = "0";
 } else {
   menu.style.width = "250px";
 }
}
