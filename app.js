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
    $('.scrollspy').scrollSpy();

})

const show_project = (data) => {
  if($(data).index() === 0){
    console.log('this should make ninja arena appear')
    $('#ninja_arena').addClass("scale-in")
    $('#jammate').removeClass("scale-in")
    $('#tell_em').removeClass("scale-in")
  }else if($(data).index()=== 1){
    console.log('this should make jammate appear')
    $('#ninja_arena').removeClass("scale-in")
    $('#jammate').addClass("scale-in")
    $('#tell_em').removeClass("scale-in")
  }else if($(data).index()===2){
    console.log('this should make tell_em appear')
    $('#ninja_arena').removeClass("scale-in")
    $('#jammate').removeClass("scale-in")
    $('#tell_em').addClass("scale-in")
  }
}