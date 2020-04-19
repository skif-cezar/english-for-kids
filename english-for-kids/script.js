/* MENU */

import cards from './cards.js';
const MENU = document.querySelector('.menu');
const MENU_BTN = document.querySelector('.burger-menu');
const HAMBURGER = document.querySelector('.hamburger');
const SWITCH = document.querySelector('.switch-label');
const SWITCH_HANDLE = document.querySelector('.switch-handle');
const SWITCH_INPUT = document.querySelector('.switch-input');
const CARDS = document.querySelector('.cards-container');
const buttonRotate = document.querySelector('.rotate');
const card = document.querySelector('.card');

MENU_BTN.addEventListener('click', (e) => {
    e.preventDefault();
    e.target.classList.toggle('active-burger');
    HAMBURGER.classList.toggle('active-burger');
    if(MENU.style.transform == 'translate(-100%)'){
        MENU.style.transform = 'translate(0%)';
    } else {
        MENU.style.transform = 'translate(-100%)';
    }
});

MENU.addEventListener('click', (event) => {
    MENU.querySelectorAll('a').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
    MENU.style.transform = 'translate(-100%)';
    HAMBURGER.classList.remove('active-burger');
    MENU_BTN.classList.remove('active-burger');
    cardCategoryRemove();
});

SWITCH.addEventListener('click', (event) => {
    CARDS.querySelectorAll('a').forEach(el => el.classList.toggle('blue'));
    MENU.classList.toggle('blue');
});

SWITCH_HANDLE.addEventListener('click', (event) => {
    CARDS.querySelectorAll('a').forEach(el => el.classList.toggle('blue'));
    MENU.classList.toggle('blue');
});

/* CARDS */

CARDS.addEventListener('click', (event) => {
    let menuLinks = [...MENU.querySelectorAll(".menu-item")];
    let keyCode = event.target.getAttribute('data-id');
    cardCategoryRemove();
    MENU.querySelectorAll('a').forEach(el => el.classList.remove('active'));
    menuLinks[keyCode].classList.toggle('active');
    MENU.style.transform = 'translate(-100%)';
    HAMBURGER.classList.remove('active-burger');
    MENU_BTN.classList.remove('active-burger');
})

function cardCategoryRemove() {
    let cardCategory = [...CARDS.querySelectorAll(".main-card")];

    if(cardCategory.length !== 0 && cardCategory.length <= 8) {
        for (let i = 0; i < cardCategory.length; i++) {
            cardCategory[i].remove();

            let DIV = document.createElement('div');
            let divCard = document.createElement('div');
            let divRotate = document.createElement('div');
            let divFront = document.createElement('div');
            let divBack = document.createElement('div');
            let cardHeaderF = document.createElement('div');
            let cardHeaderB = document.createElement('div');

            DIV.classList = 'card-container';
            divCard.classList = 'card';
            divRotate.classList = 'rotate'
            divFront.classList = 'front';
            divBack.classList = 'back';
            cardHeaderF.classList = 'card-header';
            cardHeaderB.classList = 'card-header';

            CARDS.append(DIV);
            DIV.append(divCard);
            divCard.append(divFront);
            divCard.append(divBack);
            divCard.append(divRotate);
            divFront.append(cardHeaderF);
            divBack.append(cardHeaderB);
            DIV.addEventListener('click', (e)=>{
                e.target.parentElement.classList.add('translate');
                DIV.addEventListener('mouseout', (event) => {
                    event.target.parentElement.classList.remove('translate');
                })
            })
        }
    }
}


//SWITCH_INPUT.addEventListener('change', (e) => {
//    this.isSwitch = e.target.checked ? 'on' : 'off';
//    localStorage.setItem('isSwitch', this.isSwitch);
//})
//
//let isSwitch = localStorage.getItem('isSwitch');
//console.log(isSwitch);
//if(isSwitch == 'on') {
//    console.log(isSwitch);
//    CARDS.querySelectorAll('a').forEach(el => el.classList.remove('blue'));
//    MENU.classList.remove('blue');
//}
