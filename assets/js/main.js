let menuCircle = document.querySelector('.menu-circle');
let menu = document.querySelector('.menu');

menuCircle.onclick = function () {
    menu.classList.toggle('active');
};

let F1 = document.getElementById('F1');
let F2 = document.getElementById('F2');
let F3 = document.getElementById('F3');
let F4 = document.getElementById('F4');

let f1img = document.querySelector('.f1-img');
let f2img = document.querySelector('.f2-img');
let f3img = document.querySelector('.f3-img');
let f4img = document.querySelector('.f4-img');

let iconPosition = document.querySelector('.icon-position');

function f1() {
    iconPosition.style = 'top: 33%;';
    F1.style = 'color: #fff;';
    F2.style = 'unset';
    F3.style = 'unset';
    F4.style = 'unset';

    f1img.style = 'unset';
    f2img.style = 'unset';
    f3img.style = 'unset';
    f4img.style = 'unset';
}

function f2() {
    iconPosition.style = 'top: 50%;';
    F1.style = 'color: #666;';
    F2.style = 'color: #fff;';
    F3.style = 'unset';
    F4.style = 'unset';

    f1img.style = 'opacity: 0;';
    f2img.style = 'top: 50%; left: 50%; filter: blur(0px); opacity: 1;';
    f3img.style = 'unset';
    f4img.style = 'unset';
}

function f3() {
    iconPosition.style = 'top: 67%;';
    F1.style = 'color: #666;';
    F2.style = 'unset';
    F3.style = 'color: #fff;';
    F4.style = 'unset';

    f1img.style = 'opacity: 0;';
    f2img.style = 'opacity: 0;';
    f3img.style = 'top: 50%; left: 50%; filter: blur(0px); opacity: 1;';
    f4img.style = 'unset';
}

function f4() {
    iconPosition.style = 'top: 83%;';
    F1.style = 'color: #666;';
    F2.style = 'unset';
    F3.style = 'unset';
    F4.style = 'color: #fff;';

    f1img.style = 'opacity: 0;';
    f2img.style = 'opacity: 0;';
    f3img.style = 'opacity: 0;';
    f4img.style = 'top: 50%; left: 50%; filter: blur(0px); opacity: 1;';
}

function fBack() {
    iconPosition.style = 'unset';
    F1.style = 'unset';
    F2.style = 'unset';
    F3.style = 'unset';
    F4.style = 'unset';

    f1img.style = 'unset';
    f2img.style = 'unset';
    f3img.style = 'unset';
    f4img.style = 'unset';
}













