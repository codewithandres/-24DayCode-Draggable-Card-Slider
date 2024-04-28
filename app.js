
const carousel = document.querySelector('.carousel');
const arrowBtns = document.querySelectorAll('.wrapper i');
const fristCardWidth = carousel.querySelector('.card').offsetWidth;

let isDragin = false, startX, stratScrollLeft;
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

carousel.addEventListener('mousemove', draggin);
carousel.addEventListener('mousedown', dragStart);
document.addEventListener('mouseup', dragStop);

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