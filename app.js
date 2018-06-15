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

const show_project = (data) => {
  if($(data).index() === 0){
    $('#ninja_arena').show()
    $('#jammate').hide()
    $('#jammate').removeClass("scale-in")
    $('#tell_em').hide()
    $('#tell_em').removeClass("scale-in")
    $('#ninja_arena').addClass("scale-in")
  }if($(data).index()=== 1){
    $('#jammate').show()
    $('#ninja_arena').hide()
    $('#ninja_arena').removeClass("scale-in")
    $('#tell_em').hide()
    $('#tell_em').removeClass("scale-in")
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
