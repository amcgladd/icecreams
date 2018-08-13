$(document).ready(function() {
  var iceCreams = ["strawberry", "chocolate", "mint", "vanilla", "swirl"];
  iceCreams.forEach(function(iceCream) {
  $(".ice-cream").append('<li>' + iceCream + '</li>');
  });
});
