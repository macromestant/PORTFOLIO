'use strict'

const icono = (document.querySelector('.header__fas') as HTMLElement)
const nav   = (document.querySelector('.header__nav') as HTMLElement)

icono.addEventListener('click',() : void => {
    nav.classList.toggle('ver')
})