const defaultOptions = {
    slidesWidth: 300,
    slidesHeight: 200,
    nav: true,
    autoplay: false,
    autoplaySpeed: 2000,
    slides: 2,

    dots: true,
}
let shift = 0;

let divs = document.querySelectorAll('div');
divs.forEach((el) => el.lightSlider = lightSlider);

function lightSlider(settings = {}) {
    const slidesWidth = settings.slidesWidth || defaultOptions.slidesWidth;
    const slides = settings.slides || defaultOptions.slides;
    const slidesHeight = settings.slidesHeight || defaultOptions.slidesHeight;
    const autoplaySpeed = settings.autoplaySpeed || defaultOptions.autoplaySpeed;
    const nav = settings.nav !== undefined ? settings.nav : defaultOptions.nav;
    const autoplay = settings.autoplay !== undefined
        ? settings.autoplay : defaultOptions.autoplay;

    transformHtmlSlider(this, slidesWidth, slides, nav, slidesHeight);
    setStyle(slidesWidth, slides, slidesHeight);

    if (autoplay) {
        setInterval(nextSlide, autoplaySpeed, slidesWidth, slides);
    }
};

function addNav(slidesWidth, slides , slidesHeight) {
    let navBlock = document.createElement('div');
    navBlock.className = 'nav_block';

    let prevBtn = document.createElement('button');
    prevBtn.style.position = 'absolute';
    prevBtn.style.right = `${(slidesWidth / 2 * slides) - (25 * slides)}px`;
    prevBtn.style.bottom = `30px`;
    prevBtn.style.padding = `${slidesHeight / 2}px 30px`;
    console.log(slidesHeight);
    
    prevBtn.className = 'btn_prev';
    prevBtn.innerHTML = '<';
    prevBtn.addEventListener('click', () => prevSlide(slidesWidth, slides));

    let nextBtn = document.createElement('button');
    nextBtn.style.position = 'absolute';
    nextBtn.style.left = `${(slidesWidth / 2 * slides) - (25 * slides)}px`;
    nextBtn.style.bottom = `30px`;
    nextBtn.style.padding = `${slidesHeight / 2}px 30px`;
    nextBtn.className = 'btn_next';
    nextBtn.innerHTML = '>';
    nextBtn.addEventListener('click', () => nextSlide(slidesWidth, slides));

    let dots = document.createElement('div');
    dots.classList.add('dotsDiv');
    let slidesArr = document
        .querySelectorAll('.light_slider .sliders_wrapper>div');
    let dotQuantity = Math.round(slidesArr.length / slides);

    for (let i = 0; i < dotQuantity; i++) {
        let dot = document.createElement('div');
        if (i === 0) {
            dot.classList.add('active');
        }
        dot.classList.add('dot');
        dot.dataset.shift = `${i * slidesWidth * slides}`
        dot.addEventListener('click', viewerByDot);
        dots.append(dot);
    }
    navBlock.append(prevBtn);
    navBlock.append(dots);
    navBlock.append(nextBtn);
    mainSlider.append(navBlock);
}

function viewerByDot() {
    let activeDot = document.querySelector('.dot.active');
    activeDot.classList.remove('active');
    this.classList.add('active');
    let slidersWrapper =
        document.querySelector('.light_slider .sliders_wrapper');
    slidersWrapper.style.transform = `translateX(${-this.dataset.shift}px)`
}


function dotsClassChanger(flag) {
    let dotsArr = document.querySelectorAll('.dot');
    let activeDot = Array.from(dotsArr).indexOf(document.querySelector('.active'));
    if (flag) {
        if (!dotsArr[dotsArr.length - 1].classList.contains('active')) {
            dotsArr[activeDot].classList.remove('active');
            dotsArr[activeDot + 1].classList.add('active');
        }
    }
    if (!flag) {
        if (!dotsArr[0].classList.contains('active')) {
            dotsArr[activeDot].classList.remove('active');
            dotsArr[activeDot - 1].classList.add('active');
        }
    }
}
let i = 0;
function nextSlide(slidesWidth, slides) {
    let slidersWrapper =
        document.querySelector('.light_slider .sliders_wrapper');
    let slidersWrapperWidth = slidersWrapper.offsetWidth;
    if (shift > -(slidersWrapperWidth
        - slidesWidth * slides)) {
        shift -= slidesWidth;
    }
    slidersWrapper.style.transform = `translateX(${shift}px)`;
    i++;
    console.log(i);

    if (i % slides === 0 && i != 0) {
        dotsClassChanger(true);
        i = 0;
    }
    console.log(i);
}

function prevSlide(slidesWidth, slides) {
    let slidersWrapper =
        document.querySelector('.light_slider .sliders_wrapper');
    if (shift < 0) {
        shift += slidesWidth;
    }
    slidersWrapper.style.transform = `translateX(${shift}px)`;
    i--;
    console.log(i);
    if (i % slides === 0 && i != 0) {
        dotsClassChanger(false);
        i = 0;
    }
    console.log(i);
}

function transformHtmlSlider(mainSlider, slidesWidth, slides, nav, slidesHeight) {
    mainSlider.classList.add('light_slider')
    let slidesHtml = mainSlider.innerHTML;

    mainSlider.innerHTML = `<div class="sliders_window">
        <div class="sliders_wrapper">${slidesHtml}</div>
    </div>`;

    if (nav) {
        addNav(slidesWidth, slides, slidesHeight);
    }
}
function setStyle(slidesWidth, slides, slidesHeight) {
    let slidersWindow = document
        .querySelector('.light_slider .sliders_window');

    slidersWindow.style.width =
        `${slidesWidth * slides}px`;
    slidersWindow.style.height = `${slidesHeight}px`;

    let slidesArr = document
        .querySelectorAll('.light_slider .sliders_wrapper>div');
    let sliders_wrapper = document
        .querySelector('.light_slider .sliders_wrapper');

    sliders_wrapper.style.width =
        `${slidesArr.length * slidesWidth}px`;
    slidesArr.forEach((el) => {
        el.classList.add('one_slide');
        el.style.width = `${slidesWidth}px`;
        el.style.height = `${slidesHeight}px`;
        el.style.padding = `0 1px`;
    });
}