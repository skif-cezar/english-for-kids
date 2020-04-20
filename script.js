/* MENU */

const cards = [
    ['Action (set A)', 'Action (set B)', 'Animal (set A)', 'Animal (set B)', 'Clothes', 'Emotions'],
    [
        {
            word: 'cry',
            translation: 'плакать',
            image: './assets/img/cry.jpg',
            audioSrc: 'audio/cry.mp3'
        },
        {
            word: 'dance',
            translation: 'танцевать',
            image: './assets/img/dance.jpg',
            audioSrc: 'audio/dance.mp3'
        },
        {
            word: 'dive',
            translation: 'нырять',
            image: './assets/img/dive.jpg',
            audioSrc: 'audio/dive.mp3'
        },
        {
            word: 'draw',
            translation: 'рисовать',
            image: './assets/img/draw.jpg',
            audioSrc: 'audio/draw.mp3'
        },
        {
            word: 'fish',
            translation: 'ловить рыбу',
            image: './assets/img/fish.jpg',
            audioSrc: 'audio/fish.mp3'
        },
        {
            word: 'fly',
            translation: 'летать',
            image: './assets/img/fly.jpg',
            audioSrc: 'audio/fly.mp3'
        },
        {
            word: 'hug',
            translation: 'обнимать',
            image: './assets/img/hug.jpg',
            audioSrc: 'audio/hug.mp3'
        },
        {
            word: 'jump',
            translation: 'прыгать',
            image: './assets/img/jump.jpg',
            audioSrc: 'audio/jump.mp3'
        }
    ],
    [
        {
            word: 'open',
            translation: 'открывать',
            image: './assets/img/open.jpg',
            audioSrc: 'audio/open.mp3'
        },
        {
            word: 'play',
            translation: 'играть',
            image: './assets/img/play.jpg',
            audioSrc: 'audio/play.mp3'
        },
        {
            word: 'point',
            translation: 'указывать',
            image: './assets/img/point.jpg',
            audioSrc: 'audio/point.mp3'
        },
        {
            word: 'ride',
            translation: 'ездить',
            image: './assets/img/ride.jpg',
            audioSrc: 'audio/ride.mp3'
        },
        {
            word: 'run',
            translation: 'бегать',
            image: './assets/img/run.jpg',
            audioSrc: 'audio/run.mp3'
        },
        {
            word: 'sing',
            translation: 'петь',
            image: './assets/img/sing.jpg',
            audioSrc: 'audio/sing.mp3'
        },
        {
            word: 'skip',
            translation: 'пропускать, прыгать',
            image: './assets/img/skip.jpg',
            audioSrc: 'audio/skip.mp3'
        },
        {
            word: 'swim',
            translation: 'плавать',
            image: './assets/img/swim.jpg',
            audioSrc: 'audio/swim.mp3'
        }
    ],
    [
        {
            word: 'cat',
            translation: 'кот',
            image: './assets/img/cat.jpg',
            audioSrc: 'audio/cat.mp3'
        },
        {
            word: 'chick',
            translation: 'цыплёнок',
            image: './assets/img/chick.jpg',
            audioSrc: 'audio/chick.mp3'
        },
        {
            word: 'chicken',
            translation: 'курица',
            image: './assets/img/chicken.jpg',
            audioSrc: 'audio/chicken.mp3'
        },
        {
            word: 'dog',
            translation: 'собака',
            image: './assets/img/dog.jpg',
            audioSrc: 'audio/dog.mp3'
        },
        {
            word: 'horse',
            translation: 'лошадь',
            image: './assets/img/horse.jpg',
            audioSrc: 'audio/horse.mp3'
        },
        {
            word: 'pig',
            translation: 'свинья',
            image: './assets/img/pig.jpg',
            audioSrc: 'audio/pig.mp3'
        },
        {
            word: 'rabbit',
            translation: 'кролик',
            image: './assets/img/rabbit.jpg',
            audioSrc: 'audio/rabbit.mp3'
        },
        {
            word: 'sheep',
            translation: 'овца',
            image: './assets/img/sheep.jpg',
            audioSrc: 'audio/sheep.mp3'
        }
    ],
    [
        {
            word: 'bird',
            translation: 'птица',
            image: './assets/img/bird.jpg',
            audioSrc: 'audio/bird.mp3'
        },
        {
            word: 'fish',
            translation: 'рыба',
            image: './assets/img/fish1.jpg',
            audioSrc: 'audio/fish.mp3'
        },
        {
            word: 'frog',
            translation: 'жаба',
            image: './assets/img/frog.jpg',
            audioSrc: 'audio/frog.mp3'
        },
        {
            word: 'giraffe',
            translation: 'жирафа',
            image: './assets/img/giraffe.jpg',
            audioSrc: 'audio/giraffe.mp3'
        },
        {
            word: 'lion',
            translation: 'лев',
            image: './assets/img/lion.jpg',
            audioSrc: 'audio/lion.mp3'
        },
        {
            word: 'mouse',
            translation: 'мышь',
            image: './assets/img/mouse.jpg',
            audioSrc: 'audio/mouse.mp3'
        },
        {
            word: 'turtle',
            translation: 'черепаха',
            image: './assets/img/turtle.jpg',
            audioSrc: 'audio/turtle.mp3'
        },
        {
            word: 'dolphin',
            translation: 'дельфин',
            image: './assets/img/dolphin.jpg',
            audioSrc: 'audio/dolphin.mp3'
        }
    ],
    [
        {
            word: 'skirt',
            translation: 'юбка',
            image: './assets/img/skirt.jpg',
            audioSrc: 'audio/skirt.mp3'
        },
        {
            word: 'pants',
            translation: 'брюки',
            image: './assets/img/pants.jpg',
            audioSrc: 'audio/pants.mp3'
        },
        {
            word: 'blouse',
            translation: 'блузка',
            image: './assets/img/blouse.jpg',
            audioSrc: 'audio/blouse.mp3'
        },
        {
            word: 'dress',
            translation: 'платье',
            image: './assets/img/dress.jpg',
            audioSrc: 'audio/dress.mp3'
        },
        {
            word: 'boot',
            translation: 'ботинок',
            image: './assets/img/boot.jpg',
            audioSrc: 'audio/boot.mp3'
        },
        {
            word: 'shirt',
            translation: 'рубашка',
            image: './assets/img/shirt.jpg',
            audioSrc: 'audio/shirt.mp3'
        },
        {
            word: 'coat',
            translation: 'пальто',
            image: './assets/img/coat.jpg',
            audioSrc: 'audio/coat.mp3'
        },
        {
            word: 'shoe',
            translation: 'туфли',
            image: './assets/img/shoe.jpg',
            audioSrc: 'audio/shoe.mp3'
        }
    ],
    [
        {
            word: 'skirt',
            translation: 'юбка',
            image: './assets/img/skirt.jpg',
            audioSrc: 'audio/skirt.mp3'
        },
        {
            word: 'pants',
            translation: 'брюки',
            image: './assets/img/pants.jpg',
            audioSrc: 'audio/pants.mp3'
        },
        {
            word: 'blouse',
            translation: 'блузка',
            image: './assets/img/blouse.jpg',
            audioSrc: 'audio/blouse.mp3'
        },
        {
            word: 'dress',
            translation: 'платье',
            image: './assets/img/dress.jpg',
            audioSrc: 'audio/dress.mp3'
        },
        {
            word: 'boot',
            translation: 'ботинок',
            image: './assets/img/boot.jpg',
            audioSrc: 'audio/boot.mp3'
        },
        {
            word: 'shirt',
            translation: 'рубашка',
            image: './assets/img/shirt.jpg',
            audioSrc: 'audio/shirt.mp3'
        },
        {
            word: 'coat',
            translation: 'пальто',
            image: './assets/img/coat.jpg',
            audioSrc: 'audio/coat.mp3'
        },
        {
            word: 'shoe',
            translation: 'туфли',
            image: './assets/img/shoe.jpg',
            audioSrc: 'audio/shoe.mp3'
        }
    ],
    [
        {
            word: 'sad',
            translation: 'грустный',
            image: './assets/img/sad.jpg',
            audioSrc: 'audio/sad.mp3'
        },
        {
            word: 'angry',
            translation: 'сердитый',
            image: './assets/img/angry.jpg',
            audioSrc: 'audio/angry.mp3'
        },
        {
            word: 'happy',
            translation: 'счастливый',
            image: './assets/img/happy.jpg',
            audioSrc: 'audio/happy.mp3'
        },
        {
            word: 'tired',
            translation: 'уставший',
            image: './assets/img/tired.jpg',
            audioSrc: 'audio/tired.mp3'
        },
        {
            word: 'surprised',
            translation: 'удивлённый',
            image: './assets/img/surprised.jpg',
            audioSrc: 'audio/surprised.mp3'
        },
        {
            word: 'scared',
            translation: 'испуганный',
            image: './assets/img/scared.jpg',
            audioSrc: 'audio/scared.mp3'
        },
        {
            word: 'smile',
            translation: 'улыбка',
            image: './assets/img/smile.jpg',
            audioSrc: 'audio/smile.mp3'
        },
        {
            word: 'laugh',
            translation: 'смех',
            image: './assets/img/laugh.jpg',
            audioSrc: 'audio/laugh.mp3'
        }
    ],
    [
        {
            word: 'sad',
            translation: 'грустный',
            image: './assets/img/sad.jpg',
            audioSrc: 'audio/sad.mp3'
        },
        {
            word: 'angry',
            translation: 'сердитый',
            image: './assets/img/angry.jpg',
            audioSrc: 'audio/angry.mp3'
        },
        {
            word: 'happy',
            translation: 'счастливый',
            image: './assets/img/happy.jpg',
            audioSrc: 'audio/happy.mp3'
        },
        {
            word: 'tired',
            translation: 'уставший',
            image: './assets/img/tired.jpg',
            audioSrc: 'audio/tired.mp3'
        },
        {
            word: 'surprised',
            translation: 'удивлённый',
            image: './assets/img/surprised.jpg',
            audioSrc: 'audio/surprised.mp3'
        },
        {
            word: 'scared',
            translation: 'испуганный',
            image: './assets/img/scared.jpg',
            audioSrc: 'audio/scared.mp3'
        },
        {
            word: 'smile',
            translation: 'улыбка',
            image: './assets/img/smile.jpg',
            audioSrc: 'audio/smile.mp3'
        },
        {
            word: 'laugh',
            translation: 'смех',
            image: './assets/img/laugh.jpg',
            audioSrc: 'audio/laugh.mp3'
        }
    ]
];

//import cards from './cards.js';
const MENU = document.querySelector('.menu');
const MENU_BTN = document.querySelector('.burger-menu');
const HAMBURGER = document.querySelector('.hamburger');
const SWITCH = document.querySelector('.switch-label');
const SWITCH_HANDLE = document.querySelector('.switch-handle');
const SWITCH_INPUT = document.querySelector('.switch-input');
const CARDS = document.querySelector('.cards-container');
const card = document.querySelector('.card');
const BUTTON_START = document.querySelector('.button-start');

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
    let cardCategoryMenu = [...CARDS.querySelectorAll('.card-container')];
    if(cardCategoryMenu.length == 0) {
        cardCategoryMenu = [...CARDS.querySelectorAll('.main-card')];
    }
    if(event.target.className == 'menu-item') {
        let keyCode = event.target.getAttribute('data-id');
        MENU.querySelectorAll('a').forEach(el => el.classList.remove('active'));
        event.target.classList.add('active');
        MENU.style.transform = 'translate(-100%)';
        HAMBURGER.classList.remove('active-burger');
        MENU_BTN.classList.remove('active-burger');
        cardCategoryRemove(cards, keyCode,cardCategoryMenu);
    }
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
    let cardCategory = [...CARDS.querySelectorAll(".main-card")];
    let keyCode = event.target.getAttribute('data-id');
    let isSwitch = localStorage.getItem('isSwitch');
    MENU.querySelectorAll('a').forEach(el => el.classList.remove('active'));
    menuLinks[keyCode].classList.toggle('active');
    MENU.style.transform = 'translate(-100%)';
    HAMBURGER.classList.remove('active-burger');
    MENU_BTN.classList.remove('active-burger');
    cardCategoryRemove(cards, keyCode, cardCategory);
    if(isSwitch == 'off' &&  SWITCH_INPUT.checked == false) {
        BUTTON_START.classList.add('button-start_show');
    }
})

function cardCategoryRemove(cards, keyCode, container) {

    if(container.length !== 0 && container.length <= 8) {
        for (let i = 0; i < container.length; i++) {
            container[i].remove();
        }
        for(let i = 0; i < cards[keyCode].length; i++) {

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
            cardHeaderF.innerHTML = cards[keyCode][i].word;
            cardHeaderB.classList = 'card-header';
            cardHeaderB.innerHTML = cards[keyCode][i].translation;

            CARDS.append(DIV);
            DIV.append(divCard);
            divCard.append(divFront);
            divCard.append(divBack);
            divCard.append(divRotate);
            divFront.append(cardHeaderF);
            divBack.append(cardHeaderB);
            DIV.addEventListener('click', (e)=> {
                if(e.target.classList == 'rotate') {
                    e.target.parentElement.classList.add('translate');
                    DIV.addEventListener('mouseout', (event) => {
                        event.target.parentElement.classList.remove('translate');
                    })
                }
            })
            divFront.style.backgroundImage = 'url('+cards[keyCode][i].image+')';
            divBack.style.backgroundImage = 'url('+cards[keyCode][i].image+')';
        }
    }
}


SWITCH_INPUT.addEventListener('change', (e) => {
    this.isSwitch = e.target.checked ? 'on' : 'off';
    localStorage.setItem('isSwitch', this.isSwitch);

    let isSwitch = localStorage.getItem('isSwitch');
    if(isSwitch == 'off') {
        CARDS.querySelectorAll('.card-header').forEach(el => el.classList.add('none'));
        CARDS.querySelectorAll('.rotate').forEach(el => el.classList.add('none'));
        CARDS.querySelectorAll('.back').forEach(el => el.classList.add('none'));
        CARDS.querySelectorAll('a').forEach(el => el.classList.remove('blue'));
        MENU.classList.remove('blue');
        SWITCH_INPUT.checked = false;
        let cardCategory = [...CARDS.querySelectorAll(".main-card")];
        if(cardCategory.length == 0) {
            BUTTON_START.classList.add('button-start_show');
        }
    } else {
        BUTTON_START.classList.remove('button-start_show');
        CARDS.querySelectorAll('.card-header').forEach(el => el.classList.remove('none'));
        CARDS.querySelectorAll('.rotate').forEach(el => el.classList.remove('none'));
        CARDS.querySelectorAll('.back').forEach(el => el.classList.remove('none'));
    }
})

BUTTON_START.addEventListener('click', (event) => {

})
