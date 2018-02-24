var elem = document.querySelector('.card-group');
var msnry = new Masonry( elem, {
  // options
  itemSelector: '.card',
  percentPosition: true,
  horizontalOrder: true
  // columnWidth: 200
});

// element argument can be a selector string
//   for an individual element
// var msnry = new Masonry( '.card-group', {
//   // options
// });
