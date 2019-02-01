$(() =>{


  $(window).scroll(function() {
    let windowBottom = $(this).scrollTop() + $(this).innerHeight() - 50;
    $(".fade").each(function() {
      let objectBottom = $(this).offset().top + $(this).outerHeight() + 100;
      
      if (objectBottom < windowBottom) {
        if ($(this).css("opacity")==0.4) {$(this).fadeTo(400,1);}
      } else { 
        if ($(this).css("opacity")==1) {$(this).fadeTo(400,0.4);}
      }
    });
  }).scroll();


});