
// Change Header Background on Scrolling
window.addEventListener("scroll", () => {
   if (this.scrollY >= 85) {
      headerMenu.classList.add("on-scroll");
   } else {
      headerMenu.classList.remove("on-scroll");
   }
});




// the portfolio sect
$(document).ready(function() {
   $(".portfolio-wrap").hover(
     function() {
       $(this).find(".portfolio-info").stop().animate({ opacity: 1 }, 300);
     },
     function() {
       $(this).find(".portfolio-info").stop().animate({ opacity: 0 }, 300);
     }
   );
 });


//  scroll animation
$(window).scroll(function() {
   $('.card').each(function() {
     var imagePos = $(this).offset().top;
     var topOfWindow = $(window).scrollTop();
     if (imagePos < topOfWindow + 600) {
       $(this).addClass("fadeIn");
     }
   });
 });

