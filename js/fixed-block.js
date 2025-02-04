const fixedBlock = document.querySelector('.filters-price'),
        filters = document.querySelector('.filters'),
        container = document.querySelector('.container'),
        offsetLeft = container.offsetLeft + 15,
        filtersOffsetTop = filters.offsetTop,
        smallOffset = 20,
        filtersWidth = filters.offsetWidth;

const fixedScrollBlock = () => {
    let scrollDistance = window.scrollY;
    console.log(scrollDistance);
    if(scrollDistance > (filters.offsetTop - smallOffset ) && scrollDistance <= (filters.offsetHeight + filtersOffsetTop)) {
        fixedBlock.style.left = `${offsetLeft}px`;
        fixedBlock.style.width = `${filtersWidth}px`;
        fixedBlock.classList.remove('absolute');
        fixedBlock.classList.add('fixed');
    }else {
        fixedBlock.style.left = `0px`;
        fixedBlock.style.width = `100%`;
        fixedBlock.classList.remove('fixed');
    }

    if(scrollDistance >= (filters.offsetTop - smallOffset ) + filters.offsetHeight - fixedBlock.offsetHeight) {
        fixedBlock.classList.add('absolute');
        fixedBlock.style.left = `0px`;
        fixedBlock.style.width = `100%`;
        fixedBlock.classList.remove('fixed');
    }
}
window.addEventListener('scroll', fixedScrollBlock)