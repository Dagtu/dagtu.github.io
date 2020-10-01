$(function(){

    $('.slider__inner, .news__slider').slick({
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
    });
    
    $('select').styler();
    
    $('.header__btn-menu').on('click', function(){
        $('.menu ul').slideToggle();
    })
    
});