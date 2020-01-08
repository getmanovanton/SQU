///  PRELOADER

document.body.onload = function() {
    setTimeout(function () {
        let preloader = document.getElementById('page-preload');
        if ( !preloader.classList.contains("done"))
        {
            preloader.classList.add('done')
        }
    }, 1000);
};

///  HEADER MENU

document.querySelector('nav').addEventListener('click', function(e) {
    if (e.target.classList.contains('menu__link-activeoff')) {
        let selected = this.querySelector('.menu__link-activeon');
        selected.classList.remove('menu__link-activeon');
        e.target.classList.add('menu__link-activeon')
    }
});

/// HEADER  BURGER

document.getElementById('id-btn').onclick = function () {
    document.getElementById("id-spn").classList.toggle("menu__burger-active");
    document.getElementById("id-nav").classList.toggle("menu__link-active");
    this.classList.toggle("menu__btn-active")
};

///SLIDER DESCRIPTION

let sizing = document.getElementsByClassName('sizing-arrows');
for (let i = 0; i < sizing.length; i++) {
    sizing[i].addEventListener('click', function () {
        let arrowTop = document.getElementsByClassName('arrow__top');
        for (let i = 0; i < arrowTop.length; i++) {
            arrowTop[i].classList.toggle('arrow__top-active');
        }

        let arrowBot = document.getElementsByClassName('arrow_bottom');
        for (let i = 0; i < arrowBot.length; i++) {
            arrowBot[i].classList.toggle('arrow__bottom-active');
        }

        let icons = document.getElementsByClassName('slider__controller__icons');
        for (let i = 0; i < icons.length; i++) {
            icons[i].classList.toggle('slider__controller__icons-active')
        }

        let text = document.getElementsByClassName('slider__description_text');
        for (let i = 0; i < text.length; i++) {
            text[i].classList.toggle('slider__description_text-active')
        }
    });
}

///SLIDER DESCRIPTION BUTTONS
let descript = document.getElementsByClassName('slider__controller');
let photoes = document.getElementsByClassName('slider__photo');
let descriptCount = 0;
let buttonRight = document.getElementsByClassName('right-btn');
for (let i = 0; i < buttonRight.length; i++){
    buttonRight[i].addEventListener('click', function () {
        if(descriptCount <= descript.length -2){
            descript[descriptCount].classList.remove('slider__controller-active');
            photoes[descriptCount].classList.remove('slider__photo-active');
            descriptCount = descriptCount + 1;
            descript[descriptCount].classList.add('slider__controller-active');
            photoes[descriptCount].classList.add('slider__photo-active');
        }
        else {
            descript[descriptCount].classList.remove('slider__controller-active');
            photoes[descriptCount].classList.remove('slider__photo-active');
            descriptCount = 0;
            descript[descriptCount].classList.add('slider__controller-active');
            photoes[descriptCount].classList.add('slider__photo-active');
        }
    })
}
let buttonLeft = document.getElementsByClassName('left-btn');
for (let i = 0; i < buttonLeft.length; i++){
    buttonLeft[i].addEventListener('click', function () {
        if(descriptCount > 0){
            descript[descriptCount].classList.remove('slider__controller-active');
            photoes[descriptCount].classList.remove('slider__photo-active');
            descriptCount = descriptCount - 1;
            descript[descriptCount].classList.add('slider__controller-active');
            photoes[descriptCount].classList.add('slider__photo-active');
        }
        else {
            descript[descriptCount].classList.remove('slider__controller-active');
            photoes[descriptCount].classList.remove('slider__photo-active');
            descriptCount = descript.length - 1;
            descript[descriptCount].classList.add('slider__controller-active');
            photoes[descriptCount].classList.add('slider__photo-active');
        }
    })
}



///SLIDER CLIENTS



let clientCards = document.getElementsByClassName("client");
let slideHeight = document.getElementsByClassName("list");
let slider = document.getElementById("slider");
let slideNumber = document.getElementsByClassName("page__number");
let BTNnext = document.getElementById("list-next");
let BTNprev = document.getElementById("list-prev");

let Count = 0;

for(let i=0; i < slideHeight.length; i++) {
    let Height = slideHeight[i].offsetHeight;
    slider.style.height = Height + 'px';
}

for(let i=0; i < clientCards.length; i++){
    if(i%2 !== 0){
        clientCards[i].classList.add('client-BG')
    }
}


BTNnext.addEventListener('click',function () {
   if (Count === slideHeight.length -1){
       slideHeight[Count].classList.remove("list-active");
       slideNumber[Count].classList.remove('page__number-active');
       Count = 0;
       slideHeight[Count].classList.add("list-active");
       slideNumber[Count].classList.add('page__number-active');
   }
   else {
        slideHeight[Count].classList.remove("list-active");
        slideNumber[Count].classList.remove('page__number-active');
        Count++;
        slideHeight[Count].classList.add("list-active");
        slideNumber[Count].classList.add('page__number-active');

   }

});

BTNprev.addEventListener('click',function () {
    if (Count === 0){
        slideHeight[Count].classList.remove("list-active");
        slideNumber[Count].classList.remove('page__number-active');
        Count = slideHeight.length-1;
        slideHeight[Count].classList.add("list-active");
        slideNumber[Count].classList.add('page__number-active');
    }
    else {
        slideHeight[Count].classList.remove("list-active");
        slideNumber[Count].classList.remove('page__number-active');
        Count--;
        slideHeight[Count].classList.add("list-active");
        slideNumber[Count].classList.add('page__number-active');

    }

});