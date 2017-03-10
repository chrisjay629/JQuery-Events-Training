/*
  What needs to change so that the page says "Go!"?
*/
///to change text in html you must call the h1
//it reads , get h1 and its text change to "GO"
$(document).ready(function(){
  $("h1").text("GO")
  console.log( "The page says:", $("h1").text() );


$("h1").text("Go!");
});
if ( $("h1").text() === "Go!" ){
  console.log( "The page says:", $("h1").text() );
  console.log("Success!");
} else {
  console.log( 'Can you make it say "Go!"?' );
}
