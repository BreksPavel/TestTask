
//прокрутка до якорря с id
const anchors = document.querySelectorAll('a[href*="#"]') //выбираем объекты в href которых есть #

for (let anchor of anchors) {
    anchor.addEventListener("click", function (event) {
        event.preventDefault();  // отменяем стандартное поведение 
        const blockID = anchor.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({  // scrollIntoView принимает объект
            behavior: "smooth",
            block: "start"
        })
    })
}



//меню бургер
const burgerBody = document.querySelector('.menu');
const burgerButton = document.querySelector('.burger-menu');
const burgerBackground = document.querySelector('.burger-menu__button');


if (burgerButton) {
    burgerButton.addEventListener('click', function (e) {

        document.body.classList.toggle('lock');
        burgerButton.classList.toggle('menu__open');
        burgerBody.classList.toggle('menu__open');


        if (burgerBackground.getAttribute('src') == "img/close.svg") {
            burgerBackground.setAttribute('src', "img/burger.svg");
        }
        else {
            burgerBackground.setAttribute('src', "img/close.svg");
        }
        // добавляю padding кнопке, чтобы она визуально она не сдвигалась при открытии меню
        if (burgerButton.hasAttribute('style')) {
            burgerButton.removeAttribute('style')
        }
        else {
            burgerButton.style.right = '36px';
        }

    })
}




// плавная прокрутка  до якоря из меню

const menuLinks = document.querySelectorAll('.menu__list-link[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener('click', onMenuLinkClick);
    });
    function onMenuLinkClick(e) {
        const menuLink = e.target;   //получаем целевой объект
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const goToBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;  //вычисляем высоту прокрутки

            if (burgerBody.classList.contains('menu__open')) {
                document.body.classList.remove('lock');
                burgerButton.classList.remove('menu__open');
                burgerBody.classList.remove('menu__open');

                burgerButton.removeAttribute('style')
                burgerBackground.setAttribute('src', "img/burger.svg")
            }

            window.scrollTo({
                top: goToBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}




// Проверка формы на заполненность

let form = document.querySelector('.offer__form'),
    formInputs = document.querySelectorAll('.offer__form-input')

form.onsubmit = function () {

    formInputs.forEach(function (input) {
        if (input.value === '') {
            input.classList.add('input-error')
        }
        else {
            input.classList.remove('input-error')
        }
    })
    return false;
}

//всплывающая картинка

const popupOpen = document.querySelector('.about__picture-popup')
const poupClose = document.querySelector('.popup__close')


popupOpen.addEventListener('click', function () {
    document.querySelector('.popup').classList.add('open')
    document.body.classList.add('lock');
})


poupClose.addEventListener('click', function () {
    document.querySelector('.popup').classList.remove('open')
    document.body.classList.remove('lock');
})




