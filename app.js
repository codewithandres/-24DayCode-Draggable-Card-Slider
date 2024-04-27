
const carousel = document.querySelector('.carousel');
let isDragin = false, startX, stratScrollLeft;

const draggin = e => {
    if (!isDragin) return

    carousel.scrollLeft = stratScrollLeft - (e.pageX - startX);
};

const dragStart = (e) => {
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