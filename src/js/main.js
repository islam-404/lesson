var button = document.querySelector('#button');
var modal = document.querySelector('#modal');
var close = document.querySelector('#close');
var closeTime = function () { modal.classList.remove('modal_active') }

button.addEventListener('click', function () {
    modal.classList.add('modal_active');
    setTimeout(closeTime, 50000);
});

close.addEventListener('click', function () {
    modal.classList.remove('modal_active');
});

/*инициализация wow библиотеки*/
new WOW().init();

$(document).ready(function () {
    /*валидация формы*/
    $('#brif-form').validate({
        errorElement: "div",
        rules: {
            username: {
                required: true,
                minlength: 2,
                maxlength: 15
            },
            email: {
                required: true,
                email: true
            },
            phone: {
                required: true
            }
        },
        messages: {
            username: {
                required: "Введите имя",
                minlength: jQuery.validator.format("Минимум: {0} символа"),
                maxlength: jQuery.validator.format("Максимум: {0} символов")
            },
            email: {
                required: "Введите ваш email",
                email: "Введите корректный email"
            },
            phone: "Введите ваш номер"
        }
    });
    $('.phone').mask('+7 (999) 999-99-99');
    /*скрипт слайдера*/
    $('.slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: $('.arrows__left'),
        nextArrow: $('.arrows__right'),
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});