const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.querySelector('.container');

open.addEventListener('click', () => container.classList.add('show-nav'))

close.addEventListener('click', () => container.classList.remove('show-nav'))




// add/remove class on click
// http://web-profile.net/js/dev/javascript-add-remove-class-click/

// document.querySelector('.container').addEventListener('click', function(event) {
//     event.preventDefault();
//     var target = document.querySelector('.container');
//     if (target.classList.contains('show-nav')) {
//       target.classList.remove('show-nav');
//     } else {
//       target.classList.add('show-nav');
//     }
// });



