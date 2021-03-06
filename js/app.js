var typed = new Typed('span.element', {
 strings: ["Hi, I'm Daniela Parraguez...Front-End Developer", "Hi, I'm Daniela Parraguez...Physical Therapist", "Hi, I'm Daniela Parraguez...Tea Lover"],
  smartBackspace: true,
  typeSpeed: 30,
  loop: true,
  loopCount: Infinity
});

// Changing the defaults
window.sr = ScrollReveal({ reset: true , viewOffset: { top: 50, right: 0, bottom: 0, left: 0 },});

// Customizing a reveal set
sr.reveal('.txtinicio', { duration: 2000 });
sr.reveal('.third', { duration: 2000 });
sr.reveal('.second', { duration: 2000 });
sr.reveal('.fourth', { duration: 2000 });
sr.reveal('.title', { duration: 2000 });
sr.reveal('.img-circle', { duration: 2000 });





  jQuery(document).ready(function($) {
 
        $('#myCarousel').carousel({
                interval: 6000
        });
 
        $('#carousel-text').html($('#slide-content-0').html());
 
        //Handles the carousel thumbnails
       $('[id^=carousel-selector-]').click( function(){
            var id = this.id.substr(this.id.lastIndexOf("-") + 1);
            var id = parseInt(id);
            $('#myCarousel').carousel(id);
        });
 
 
        // When the carousel slides, auto update the text
        $('#myCarousel').on('slid.bs.carousel', function (e) {
                 var id = $('.item.active').data('slide-number');
                $('#carousel-text').html($('#slide-content-'+id).html());
        });
});

