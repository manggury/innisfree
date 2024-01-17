$(function () {
    // $(window).on('scroll', function () {
    //     const scrollHeight = $(window).scrollTop();
    //     console.log(scrollHeight);
    //     if (scrollHeight > 0) {
    //         $('.header').addClass('on')
    //     } else {
    //         $('.header').removeClass('on')
    //     }
    // })
    $('.main_visual .visual_slide').slick({
        arrows: false,
    });

    $('.main_content .content_wrap .content_slide').slick({
        arrows: false,
    });
    $('.content_wrap .dot_area>ul li').click(function () {
        var slideIndex = $(this);
        $('.main_content .content_wrap .content_slide').slick('slickGoTo', slideIndex);
    });

    $('.main_promotion .promotion_wrap .right .promotion_slide').slick({
        arrows: false,
        slidesToShow: 4,
    });
    $('.promotion_wrap .left .txt .arrows .left_arrow').click(function () {
        $('.main_promotion .promotion_wrap .right .promotion_slide').slickprev();
    });
});