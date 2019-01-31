$(() =>{

  $("input").on('input', function() {
    const inputLength = $(this).val().length;
    if (inputLength > 0) {
      if ($("#nextbutton").length = 0) {
        $("#nextbutton").append("<button>Next</button>");
      }
    }
  })


  $(window).scroll(function() {
    let windowBottom = $(this).scrollTop() + $(this).innerHeight() - 100;
    $(".fade").each(function() {
      /* Check the location of each desired element */
      let objectBottom = $(this).offset().top + $(this).outerHeight() + 100;
      
      if (objectBottom < windowBottom) {
        if ($(this).css("opacity")==0.3) {$(this).fadeTo(500,1);}
      } else { 
        if ($(this).css("opacity")==1) {$(this).fadeTo(500,0.3);}
      }
    });
  }).scroll();


});