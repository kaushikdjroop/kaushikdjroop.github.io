$(window).scroll(function() {
  if ($(document).scrollTop() > $('#About').offset().top-100) {
    $('nav').css('background-image', 'url("images/navBGDark.png")');
    //alert(2);
  } else {
    $('nav').css('background-image', 'url("images/navBGLight.png")');
    // alert(23);
  }
});

$(document).ready(function(){
  $(".navbar a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
   

        window.location.hash = hash;
      });
    } 
  });
})

