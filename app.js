console.log('sanity check');

  $(document).ready(function(){
    $('.parallax').parallax();
      M.AutoInit();

    $('.carousel').carousel({
    onCycleTo: function(data) {
      // console.log(data);
      // console.log($(data).index());
      show_project(data);
    }
});
        $('.sidenav').sidenav();
    $('.scrollspy').scrollSpy();

})

// reveal

window.sr = ScrollReveal({ reset: true });
sr.reveal('#skills', { duration: 700 });
sr.reveal('#whoami', { duration: 1500 });
sr.reveal('#aboutme', { duration: 700 });
sr.reveal('.section-title', { duration: 1200 });
sr.reveal('.band_photo', { duration: 1000 });
// sr.reveal('.row', { duration: 1000 });
sr.reveal('.path_background', { duration: 1000 });
sr.reveal('.carousel', { duration: 1000 });
sr.reveal('.row1', { duration: 1500 });
sr.reveal('.row2', { duration: 1500 });
sr.reveal('.row3', { duration: 1500 });
sr.reveal('.row4', { duration: 1500 });

// === 
// typeit.js
// ===

var instance = new TypeIt('#whoami', {
    // strings: ['This is my string!'],
    //-- Other options...
});

new TypeIt('#whoami', {
    strings: ["Web Developer.", "Software Developer.", "Gamer.", "Musician.", "<span class='colorful-background'> Full Stack Developer.</span>"],
    speed: 85,
    breakLines: false,
    autoStart: false
});

// 

// $(document).scroll(function() {
//   var y = $(this).scrollTop();
//   if (y > 400) {
//     $('.name').fadeIn();
//   } else {
//     $('.name').fadeOut();
//   }
// });

const show_project = (data) => {
  if($(data).index() === 0){
    $('#ninja_arena').show()
    $('#jammate').removeClass("scale-in")
    $('#jammate').hide()
    $('#tell_em').removeClass("scale-in")
    $('#tell_em').hide()
    $('#wtp').removeClass("scale-in")
    $('#wtp').hide()
    $('#ninja_arena').addClass("scale-in")
  }if($(data).index()=== 1){
    $('#jammate').show()
    $('#ninja_arena').removeClass("scale-in")
    $('#ninja_arena').hide()
    $('#tell_em').removeClass("scale-in")
    $('#tell_em').hide()
    $('#wtp').removeClass("scale-in")
    $('#wtp').hide()
    $('#jammate').addClass("scale-in")
  }if($(data).index()===2){
    $('#tell_em').show()
    $('#jammate').removeClass("scale-in")
    $('#jammate').hide()
    $('#ninja_arena').removeClass("scale-in")
    $('#ninja_arena').hide()
    $('#wtp').removeClass("scale-in")
    $('#wtp').hide() 
    $('#tell_em').addClass("scale-in")
  }if($(data).index()===3){
    $('#wtp').show()
    $('#jammate').removeClass("scale-in")
    $('#jammate').hide()
    $('#ninja_arena').removeClass("scale-in")
    $('#ninja_arena').hide()
    $('#tell_em').removeClass("scale-in")
    $('#tell_em').hide() 
    $('#wtp').addClass("scale-in")
  }
}