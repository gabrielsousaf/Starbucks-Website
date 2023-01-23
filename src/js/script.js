function imgSlider(anything){
    document.querySelector('.starbucks').src = anything;
}

function changeCircleColor(color){
    const circle = document.querySelector('.circle');
    circle.style.background = color;
}

let menu = document.querySelector('#menu-icon');
let navabr = document.querySelector('.navigation');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navabr.classList.toggle('open');
}
