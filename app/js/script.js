$(document).ready(function(){

    //mob-menu
    var menuBtn = $('#menu');
    var menu = $('.header__menu');

    menuBtn.on('click', function (event) {
        event.preventDefault();
        menu.toggleClass('header__menu_responsive');
    });

    //slider

    $('.slider__container').on('init', function(event, slick){
        var $items = slick.$dots.find('li');
        $items.addClass('dots');
        $items.find('button').remove();
    });

    $('.slider__container').slick({
        arrows: true,
        prevArrow: $('#btn-prev'),
        nextArrow: $('#btn-next'),
        appendDots: $('.slider__dots'),
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000

    });
    $('.slick-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $('.dots.active').removeClass('active');
        $('.dots').eq(nextSlide).addClass('active');
    });

    $('.dots').on('click', function(e){
        e.preventDefault();
        $('.dots.active').removeClass('active');
        $(this).addClass('active');
        var targetSlide = $(this).data('target');
        $('.slick-slider').slick('slickGoTo', targetSlide );
    });

    //skill bar
    var $div = $('#about'),
        inited=false;
    
    $(window).scroll(function () {
        if(inited) return;

        var $t=$(this),
            s_top=$t.scrollTop();

        if(s_top+$t.height()+50<$div.offset().top)
            return;

        $('.about__content__skillbar__item__bar').each(function () {
            $(this).find('.about__content__skillbar__item__bar__progress').animate({
                width:$(this).attr('data-percent')
            }, 4000);
        });

        $(".header__nav__item").mPageScroll2id();

    });


    //active scroll nav menu
    $('a[href^="#"]').bind('click', function(e) {
        e.preventDefault(); // prevent hard jump, the default behavior

        var target = $(this).attr("href"); // Set the target as variable

        // perform animated scrolling by getting top-position of target-element and set it as scroll target
        $('html, body').stop().animate({
            scrollTop: $(target).offset().top
        }, 600, function() {
            location.hash = target; //attach the hash (#jumptarget) to the pageurl
        });

        return false;
    });

});

$(window).scroll(function() {
    var scrollDistance = $(window).scrollTop();

    $('.page-section').each(function(i) {
        if ($(this).position().top <= scrollDistance) {
            $('.nav.nav_active').removeClass('nav_active');
            $('.nav').eq(i).addClass('nav_active');
        }
    });
}).scroll();
