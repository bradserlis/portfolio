console.log('sanity check');

  $(document).ready(function(){
    $('.parallax').parallax();
      M.AutoInit();

    $('.carousel').carousel({
    onCycleTo: function(data) {
      console.log(data);
      console.log($(data).index());
    }
});
    $('.scrollspy').scrollSpy();

})