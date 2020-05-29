const defaultOptions = {
    slidesWidth: 500,
    slidesHeight: 300,
    nav: true,
    slides: 2,
}
let shift = 0;

let divs = document.querySelectorAll('div');
divs.forEach((el) => el.lightSlider = lightSlider);

function lightSlider() {
    transformHtmlSlider(this);
    setStyle();
};

function nextSlide() {
    let slidersWrapper = 
        document.querySelector('.light_slider .sliders_wrapper');
    let slidersWrapperWidth = slidersWrapper.offsetWidth - (defaultOptions.slidesWidth * (defaultOptions.slides - 1));
    if ( shift > -(slidersWrapperWidth
        - defaultOptions.slidesWidth) ) {
            shift -= defaultOptions.slidesWidth;
    }
    slidersWrapper.style.transform = `translateX(${shift}px)`;
}
function prevSlide() {
    let slidersWrapper = 
        document.querySelector('.light_slider .sliders_wrapper');
    if ( shift < 0 ) {
            shift += defaultOptions.slidesWidth;
    }
    slidersWrapper.style.transform = `translateX(${shift}px)`;
}

function transformHtmlSlider(mainSlider) {
    mainSlider.classList.add('light_slider');
    let slidesHtml = mainSlider.innerHTML;

    mainSlider.innerHTML = `<div class="sliders_window">
        <div class="sliders_wrapper">${slidesHtml}</div>
    </div>`;

    let navBlock = document.createElement('div');
    navBlock.className = 'nav_block';

    let prevBtn = document.createElement('button');
    prevBtn.className = 'btn_prev';
    prevBtn.style.position = 'relative';
    prevBtn.style.height = `${defaultOptions.slidesHeight}px`;
    prevBtn.innerHTML = '<';
    prevBtn.addEventListener('click', prevSlide);

    let nextBtn = document.createElement('button');
    nextBtn.className = 'btn_next';
    nextBtn.style.position = 'relative';
    nextBtn.style.left = `${defaultOptions.slidesWidth * defaultOptions.slides - 269}px`;
    nextBtn.style.height = `${defaultOptions.slidesHeight}px`;
    nextBtn.innerHTML = '>';
    nextBtn.addEventListener('click', nextSlide);


    navBlock.append(prevBtn);
    navBlock.append(nextBtn);
    mainSlider.append(navBlock);
}
function setStyle() {
    let slidersWindow = document
    .querySelector('.light_slider .sliders_window');

    slidersWindow.style.width = `${defaultOptions.slidesWidth  * defaultOptions.slides}px`;
    slidersWindow.style.height = `${defaultOptions.slidesHeight.slides}px`;

    let slides = document
        .querySelectorAll('.light_slider .sliders_wrapper>div');
    let sliders_wrapper = document
        .querySelector('.light_slider .sliders_wrapper');

    sliders_wrapper.style.width = 
        `${slides.length * defaultOptions.slidesWidth}px`;
    slides.forEach((el) => {
        el.classList.add('one_slide');
        el.style.width = `${defaultOptions.slidesWidth}px`;
        el.style.height = `${defaultOptions.slidesHeight}px`;
        el.style.padding = `0 1px`;
    });
}