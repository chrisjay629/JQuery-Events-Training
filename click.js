console.log("Sanity Check: JS is working!");




$(document).ready(function(){

  $( "span" ).each(function( index ) {
    $('span').eq(index).click(function() {
    $("ul").append($("<li>").append($( this ).text()));
  });


  return true;
  });

});
