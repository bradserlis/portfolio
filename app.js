console.log('sanity check');

  $(document).ready(function(){
    $('.parallax').parallax();
      M.AutoInit();

    $('.carousel').carousel({
    onCycleTo: function(data) {
      console.log(data);
      console.log($(data).index());
      show_project(data);
    }
});
        $('.sidenav').sidenav();
    $('.scrollspy').scrollSpy();

})

// === 
// typeit.js
// ===

var instance = new TypeIt('#whoami', {
    // strings: ['This is my string!'],
    //-- Other options...
});

new TypeIt('#whoami', {
    strings: ["Web Developer.", "Software Developer.", "Gamer.", "Musician.", "<strong>Full Stack Developer.</strong>"],
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
    $('#ninja_arena').addClass("scale-in")
  }if($(data).index()=== 1){
    $('#jammate').show()
    $('#ninja_arena').removeClass("scale-in")
    $('#ninja_arena').hide()
    $('#tell_em').removeClass("scale-in")
    $('#tell_em').hide()
    $('#jammate').addClass("scale-in")
  }if($(data).index()===2){
    $('#tell_em').show()
    $('#jammate').removeClass("scale-in")
    $('#jammate').hide()
    $('#ninja_arena').removeClass("scale-in")
    $('#ninja_arena').hide() 
    $('#tell_em').addClass("scale-in")
  }
}
