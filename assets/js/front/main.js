function sliderProject() {
    var swiper = new Swiper('.project-detail .swiper-container', {
        slidesPerView: 'auto',
        spaceBetween: 30,
        speed: 1100,
        loop: true,
        centeredSlides: true,
        navigation: {
            nextEl: '.project-detail .swiper-button-next',
            prevEl: '.project-detail .swiper-button-prev',
        },
        breakpoints: {
            // 320: {
            //     slidesPerView: 1,
            //     spaceBetween: 0
            // },
            // 480: {
            //     slidesPerView: 1,
            //     spaceBetween: 0
            // },

        }
    })
}




$(document).ready(function() {
    cartCalc()
    sliderProject()
        // $('input[type="tel"]').mask('+7 (999) 999-9999', { placeholder: '+7 (       )         -' });

    $(".projects__all").click(function() {
        $(".projects__item").removeClass("projects__item--hide")
        $(this).hide()
    })

    $(".qa__item-show").click(function() {
        if ($(this).hasClass("qa__item-show--active")) {
            $(".qa__item-show").removeClass("qa__item-show--active")
        } else {
            $(".qa__item-show").removeClass("qa__item-show--active")
            $(this).addClass("qa__item-show--active")
        }
    })

})

function clickOutsideElemnt(div, e) {
    if (!div.is(e.target) &&
        div.has(e.target).length === 0) {
        div.hide();
    }
}

function cartCalc() {
    $('.ccalc .ccalc-minus').click(function() {
        let a = $(this).closest('.ccalc').find('input').val();
        if (a > 1) {
            let b = +a - 1;
            $(this).closest('.ccalc').find('input').val(b);
        } else {
            $(this).closest('.ccalc').find('input').val(a);
            $(this).addClass("disabled");
        }
    });
    $('.ccalc .ccalc-plus').click(function() {
        let a = $(this).closest('.ccalc').find('input').val();
        let b = +a + 1;
        $(this).closest('.ccalc').find('input').val(b);
        $(this).siblings(".ccalc-minus").removeClass("disabled");
    });
}


function onIn() {
    if (window.innerWidth > 992) {
        let el = $(this)
        setTimeout(function() {
            if (el.is(':hover')) {
                el.children(".nav__item-hidden").addClass("nav__item-hidden--active")
            }

        }, 200);
    }
}

function onOut() {
    if (window.innerWidth > 992) {
        $(this).children(".nav__item-hidden").removeClass("nav__item-hidden--active")
    }
}