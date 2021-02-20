'use strict';
var icono = document.querySelector('.header__fas');
var nav = document.querySelector('.header__nav');
icono.addEventListener('click', function () {
    nav.classList.toggle('ver');
});
