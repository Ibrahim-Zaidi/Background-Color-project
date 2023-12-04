const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');
const body = document.querySelector('body');


btn.addEventListener('click', function() {
    
    let random = Math.trunc(Math.random() * colors.length) ;
    color.textContent = colors[random];
    body.style.backgroundColor = colors[random];


})