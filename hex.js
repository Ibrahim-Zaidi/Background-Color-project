const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById('btn');
const body = document.querySelector('body');
const color = document.querySelector('.color');



btn.addEventListener('click', function( ) {
    
  let str = "#" ;

  for (let i = 0 ; i < 6 ; i++) {

  str += hex[randomNumber()];

  }

  body.style.backgroundColor =  str ;
  color.textContent = str ;

});

const randomNumber = function() {
  return Math.trunc(Math.random() * hex.length ) ;
}


