
 //scroll to bottom button//
 function scrollToBottom() {
    var c = document.documentElement.scrollTop || document.body.scrollTop;
    var end = document.body.scrollHeight - window.innerHeight;
    if (c < end) {
        window.scrollTo(0, c + (end - c) / 8);
        window.requestAnimationFrame(scrollToBottom);
    } else {
        window.scrollTo(0, end);
    }
}
 //scroll to top button//
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
 window.onscroll = function() {
    if (window.pageYOffset === 0) {
      document.getElementById("scrollToBottomBtn").style.display = "block";
    } else {
      document.getElementById("scrollToBottomBtn").style.display = "none";
    }
    if (window.pageYOffset + window.innerHeight >= document.body.scrollHeight) {
      document.getElementById("scrollToTopBtn").style.display = "block";
    } else {
      document.getElementById("scrollToTopBtn").style.display = "none";
    }
  };
// JavaScript function to open and close the side menu
function openNav() {
 var menu = document.getElementById("mySidenav");
 if (menu.style.width === "250px") {
   menu.style.width = "0";
 } else {
   menu.style.width = "250px";
 }
}


//random number
function generateAmount() {
    const output = document.getElementById("output");
    const randomAmount = (Math.random() * 100).toFixed(2);
    output.innerHTML = `$${randomAmount}`;
  }