# Инструкция по установке Light slider #

* Настройте свою HTML-разметку.
><div class="main_slider">
>><div><img ...></div>
>><div><img ...></div>

>><div><img ...></div>

>><div><img ...></div>

></div>
***
* Переместите light-slider.css и light-slider.js в свой проект.
***
* Добавьте light-slider.css в свой <head>
><link rel="stylesheet" href="./css/light-slider.css">
***
* Подключите light-slider.js в конец <body>
><script src="./js/light-slider.js"></script>
***
* Поздравляю! Вы подключили слайдер, приступаем к настройкам.
Вставьте настройки слайдера в свой .js файл.
>let mainSlider = document.querySelector('.main_slider');

>mainSlider.lightSlider({

>>slides: 2,

>>slidesWidth: 500,

>>slidesHeight: 300,

>>nav: true,

>>autoplay: false,

>>autoplaySpeed: 2000,

>});

Разберём это подробнее.
>slides: 2, - Количество отображаемых слайдов

>slidesWidth: 500, - Ширина слайда

>slidesHeight: 300, - Высота слайда

>nav: true, - Значение true показывает стрелки слайдера, false 
убирает их.

>autoplay: false, - Автовоспроизведение слайдов. true - вкл, false - выкл.

>autoplaySpeed: 2000, - Скорость перемотки слайдов.