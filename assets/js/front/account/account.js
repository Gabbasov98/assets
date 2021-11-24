$(document).ready(function() {
    $(".account-sidebar__item-show").click(function() {
        if ($(this).hasClass("account-sidebar__item-show--active")) {
            $(".account-sidebar__item-show").removeClass("account-sidebar__item-show--active")
            $(".account-sidebar__item-hidden").slideUp()
        } else {
            $(".account-sidebar__item-show").removeClass("account-sidebar__item-show--active")
            $(this).addClass("account-sidebar__item-show--active")
            $(this).siblings(".account-sidebar__item-hidden").slideDown()
        }
    })

    $(".account-header__language-show").click(function() {
        if ($(this).hasClass("account-header__language-show--active")) {
            $(this).removeClass("account-header__language-show--active")
        } else {
            $(this).addClass("account-header__language-show--active")
        }

    })

    $(".account-header__language-variant").click(function() {
        let path = $(this).attr("data-lang-variant")
        $(".account-header__language-variant").removeClass("account-header__language-variant--active")
        $(this).addClass("account-header__language-variant--active")
        $(".account-header__language-current").removeClass("account-header__language-current--active")
        $(`.account-header__language-current[data-lang-current="${path}"]`).addClass("account-header__language-current--active")
        $(".account-header__language-show").removeClass("account-header__language-show--active")
    })


    $(document).mouseup(function(e) {
        var div = $(".account-header__language-hidden");
        if (!div.is(e.target) &&
            div.has(e.target).length === 0) {
            if ($(".account-header__language-show").hasClass("account-header__language-show--active")) {
                $(".account-header__language-show").removeClass("account-header__language-show--active")
            }
        }
    });

    $(".account-header__burger-item-show").click(function() {
        if ($(this).hasClass("account-header__burger-item-show--active")) {
            $(".account-header__burger-item-show").removeClass("account-header__burger-item-show--active")
        } else {
            $(".account-header__burger-item-show").removeClass("account-header__burger-item-show--active")
            $(this).addClass("account-header__burger-item-show--active")
        }
    })

    $(".account-header__burger").click(function() {
        if ($(this).hasClass("account-header__burger--active")) {
            $(this).removeClass("account-header__burger--active")
        } else {
            $(this).addClass("account-header__burger--active")
        }
    })

    $(document).mouseup(function(e) {
        var div = $(".account-header__burger-menu");
        if (!div.is(e.target) &&
            div.has(e.target).length === 0) {
            if ($(".account-header__burger").hasClass("account-header__burger--active")) {
                $(".account-header__burger").removeClass("account-header__burger--active")
            }
        }
    });

    $(document).mouseup(function(e) {
        var div = $(".account-sidebar");
        if (!div.is(e.target) &&
            div.has(e.target).length === 0) {
            $(".account-sidebar").removeClass("account-sidebar--active")
        }
    });




    $(".account-sidebar-btn").click(function() {
        $(".account-sidebar").addClass("account-sidebar--active")
    })
    $(".account-sidebar__close").click(function() {
        $(".account-sidebar").removeClass("account-sidebar--active")
    })

})