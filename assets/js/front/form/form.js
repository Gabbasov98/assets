function galleryImg() {
    var swiper = new Swiper(".gallery-img-slider .mySwiper", {
        spaceBetween: 20,
        slidesPerView: 6,
        freeMode: true,
        watchSlidesProgress: true,
        breakpoints: {
            100: {
                slidesPerView: 1,
                spaceBetween: 10
            },
            320: {
                slidesPerView: 2,
                spaceBetween: 10
            },
            576: {
                slidesPerView: 3,
                spaceBetween: 10
            },
            768: {
                slidesPerView: 4,
            },
            1100: {
                slidesPerView: 5,
                spaceBetween: 20,
            },
            // when window width is >= 640px
            1300: {
                slidesPerView: 6,
            }
        }
    });
    var swiper2 = new Swiper(".gallery-img-slider .mySwiper2", {
        spaceBetween: 20,
        navigation: {
            nextEl: ".gallery-img-slider .swiper-button-next",
            prevEl: ".gallery-img-slider .swiper-button-prev",
        },
        thumbs: {
            swiper: swiper,
        },
    });
}

function galleryVideo() {
    var swiper = new Swiper(".gallery-video-slider .mySwiper", {
        spaceBetween: 20,
        slidesPerView: 7,
        freeMode: true,
        watchSlidesProgress: true,
        breakpoints: {
            100: {
                slidesPerView: 1,
                spaceBetween: 10
            },
            320: {
                slidesPerView: 2,
                spaceBetween: 10
            },
            576: {
                slidesPerView: 3,
                spaceBetween: 10
            },
            768: {
                slidesPerView: 4,
            },
            1100: {
                slidesPerView: 6,
                spaceBetween: 20,
            },
            1300: {
                slidesPerView: 7,
            }
        }
    });
    var swiper2 = new Swiper(".gallery-video-slider .mySwiper2", {
        spaceBetween: 20,
        navigation: {
            nextEl: ".gallery-video-slider .swiper-button-next",
            prevEl: ".gallery-video-slider .swiper-button-prev",
        },
        thumbs: {
            swiper: swiper,
        },
    });
}

$(document).ready(function() {
    galleryImg()
    galleryVideo()

    $(function() {
        $.each($('.form-group input'), function(i, el) {
            if ($(el).val()) {
                $(el).addClass("input-filled")
            } else {
                $(el).removeClass("input-filled")
            }
        });
    });

    if (document.querySelector('.form-select select')) {
        $('.form-select select').niceSelect();
    }

    $(".form-group input").keyup(function() {
        let inputVal = $(this).val()
        if (inputVal) {
            $(this).addClass("input-filled")
        } else {
            $(this).removeClass("input-filled")
        }
    });

    $(".password-toggle").click(function() {
        if ($(this).hasClass("password-toggle--active")) {
            $(this).removeClass("password-toggle--active")
            $(this).siblings("input").attr("type", "password")
        } else {
            $(this).addClass("password-toggle--active")
            $(this).siblings("input").attr("type", "text")
        }
    })

    $(".form-news__item-show").click(function() {
        if ($(this).hasClass("form-news__item-show--active")) {
            $(".form-news__item-show").removeClass("form-news__item-show--active")
            $(".form-news__item-hidden").slideUp()
        } else {
            $(".form-news__item-show").removeClass("form-news__item-show--active")
            $(this).addClass("form-news__item-show--active")
            $(".form-news__item-hidden").slideUp()
            $(this).siblings(".form-news__item-hidden").slideDown()
        }
    })

})