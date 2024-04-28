
const carousel = document.querySelector('.carousel');
const arrowBtns = document.querySelectorAll('.wrapper i');
const fristCardWidth = carousel.querySelector('.card').offsetWidth;
const carouselChildrens = [...carousel.children];

let isDragin = false, startX, stratScrollLeft;

// get the of cards that in the carousel at once
let cardPeviw = Math.random(carousel.offsetWidth / fristCardWidth);
// inser copies of the last few cards to beginning of carousel infinite scrolling
carouselChildrens.slice(-cardPeviw).reverse().forEach(card => {

    carousel.insertAdjacentHTML('afterbegin', card.outerHTML);
});
// insert copies the frist few cards to end of carrousel for infinite scrolling
carouselChildrens.slice(0, cardPeviw).forEach(card => {

    carousel.insertAdjacentHTML('beforebegin', card.outerHTML);
});

// add event listener for the arrows buttons to scroll the carousel left rigth
arrowBtns.forEach(btn => {
    btn.addEventListener('click', () => {

        carousel.scrollLeft += btn.id === 'left' ? -fristCardWidth : fristCardWidth;
    });
});

const draggin = e => {
    if (!isDragin) return

    carousel.scrollLeft = stratScrollLeft - (e.pageX - startX);
};

const dragStart = e => {
    isDragin = true;

    startX = e.pageX;
    stratScrollLeft = carousel.scrollLeft;
    carousel.classList.add('draggin');
};

const dragStop = () => {
    isDragin = false;
    carousel.classList.remove('draggin');
};

const infiniteScroll = () => {
    // If the carousel is at the begining, scroll the end
    if (carousel.scrollLeft === 0) {

        carousel.classList.add('no-trasition');
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
        carousel.classList.remove('no-trasition');
    };
    // If the carousel is at the end to the begninig
    if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {

        carousel.classList.add('no-trasition');
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove('no-trasition');

    };
};

carousel.addEventListener('mousemove', draggin);
carousel.addEventListener('mousedown', dragStart);
document.addEventListener('mouseup', dragStop);
carousel.addEventListener('scroll', infiniteScroll);


// const body = document.body;
// const scrollWrap = document.querySelector(".smooth-scroll-wrapper");
// let height = scrollWrap.getBoundingClientRect().height - 1;
// const speed = 0.04;

// let offset = 0;

// body.style.height = `${Math.floor(height)}px`;

// const smoothScroll = () => {
//     offset += (window.pageYOffset - offset) * speed;

//     const scroll = `translateY(-${offset}px) translateZ(0)`;
//     scrollWrap.style.transform = scroll;

//     requestAnimationFrame(smoothScroll);
// }

// smoothScroll();