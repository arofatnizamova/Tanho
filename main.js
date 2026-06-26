$(document).ready(function () {
    $('.slick-slider').each(function () {
        let slider = $(this);
        let options = {
            prevArrow: slider.parent().find('.slider-prev'),
            nextArrow: slider.parent().find('.slider-next'),
            infinite: true,
            autoplay: true,
            dots: false
        }
        let extraOptions = {}
        if (slider.hasClass('products')) {
            extraOptions = {
                slidesToShow: 4,
                slidesToScroll: 1,
                centerMode: false,
                arrows: true,
                dots: false,
                autoplay: true,
                responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
                ]
            }
        } if (slider.hasClass('sertificates')) {
            extraOptions = {
                slidesToShow: 4.2,
                slidesToScroll: 1,
                centerMode: false,
                arrows: true,
                dots: false,
                autoplay: true,
                responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3.5,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2.8,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
                ]
            }
        }

        slider.slick($.extend({}, extraOptions, options));
    })


})