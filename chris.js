console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  $("#time").text( Date.now() );
/////////??????stilll need to figure out what .after really means lol
  $('#total').after('<input type="reset" id="reset">')

  $('.add').on('change', function() {
    var leftNumber=Number($('#left').val());
    var rightNumber=Number($('#right').val());
    var total= leftNumber+rightNumber;
    $('#total').val(total);
  });

  $('#reset').on('click', function() {
    ///////make a string instead of a 3 column list
    $('#total, #left, #right').val('');

  });


});
