$(document).ready(function(){
    $('.progress__slider').slick({
        infinite: false,
    });
    $('.link1').click(function(){
        $('.progress__slider').slick('slickGoTo', 0);
    }); 
    $('.link2').click(function(){
        $('.progress__slider').slick('slickGoTo', 1);
    }); 
    $('.link3').click(function(){
        $('.progress__slider').slick('slickGoTo', 2);
    }); 
    $('.link4').click(function(){
        $('.progress__slider').slick('slickGoTo', 3);
    }); 
    $('.tab').click(function(){
        $('.tab').removeClass('progress__menu-active');
        $(this).addClass('progress__menu-active');
    });
    $('.header__btn-menu').click(function(){
        $(this).toggleClass('header__btn-active');
        $('.header__menu ul').slideToggle();
    });
});