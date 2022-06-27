/* smooth scoll */

$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
});


/* accordion */

$(".sec-services .toggle-btn").on("click", function(e)
{
    e.preventDefault();
    var $par = $(this).parents('.services-elem');

    if($('.sec-services .sp-open') && !$par.hasClass('sp-open'))
    {
        $('.sec-services .sp-open .text').slideUp(400);
        $('.sec-services .sp-open').removeClass("sp-open");
    }

    $par.toggleClass("sp-open");
    $par.find(".text").slideToggle(600);
});


/* slider */

$('.steps-slider').slick({
    //centerMode: true,
    infinite: false, 
    slidesToShow: 2,
    prevArrow: $('.sec-steps .arrow-prev'),
    nextArrow: $('.sec-steps .arrow-next'),
});