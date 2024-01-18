$(function () {

    $(window).on('scroll', function () {
        const scrollHeight = $(window).scrollTop();
        console.log(scrollHeight);
        if (scrollHeight > 0) {
            $('.header_bottom').addClass('on')
        } else {
            $('.header_bottom').removeClass('on')
        }
    })

    $('.header_bottom .menu_btn span').on('click', function (e) {
        e.preventDefault();
        $('.header_bottom .gnb').toggleClass('on');
    });

    $('.main_visual .visual_slide').slick({
        arrows: true,
        slidesToShow: 1,
        prevArrow: $('.main_visual .left_arrow'),
        nextArrow: $('.main_visual .right_arrow'),
    });


    $('.main_content .content_wrap .content_slide').slick({
        arrows: false,
    });

    $('.content_wrap .dot_area>ul li').click(function () {
        var slideIndex = $(this).index();
        $('.main_content .content_wrap .content_slide').slick('slickGoTo', slideIndex);
    });

    $('.main_promotion .promotion_wrap .right .promotion_slide').slick({
        arrows: true,
        slidesToShow: 4,
        prevArrow: $('.main_promotion .left_arrow'),
        nextArrow: $('.main_promotion .right_arrow'),
    });

});