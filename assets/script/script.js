$(function () {

    // Phần nav
    $('.snazzymenu').snazzyMenu({
        theme: "",
    });

    //Phần carousel-banner cmt by Doan Trung Quy
    $(".owl-carousel").owlCarousel(
        {
            autoplay: true,
            autoplayTimeout: 5000,
            loop: true,
            margin: 10,
            animateOut: 'fadeOut',
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: true,
                    dots: true,
                },
                600: {
                    items: 1,
                },
                1000: {
                    items: 1,
                    nav: true,
                    dots: true,
                }
            }
        }
    );

    //Phần countup cmt by Doan Trung Quy
    var one = {
        start: 0,
        last: 10000,
        duration: 2000,
        frame: 33,
     


    };
    var two = {
        start: 0,
        last: 17,
        duration: 800
    }

    var three = {
        start: 0,
        last: 200,
        duration: 2000
    }

    var isScrolling = false;

    // Kích hoạt sự kiện khi cuộn trang
    $(window).scroll(function () {
        if (!isScrolling) {
            isScrolling = true;

            // Gọi hàm countUp khi người dùng cuộn trang
            $('.one').countUp(one);
            $('.two').countUp(two);
            $('.three').countUp(three);

            // Đặt thời gian chờ trước khi cho phép nhảy số mới
            setTimeout(function () {
                isScrolling = false;
            }, 2000); // Thời gian chờ 1 giây trước khi nhảy số mới
        }
    });
   

    //aos animation
    AOS.init();


    //Phần carousel for news and even
    $(".academic-news-carousel").owlCarousel(
        {
            autoplay: true,
            autoplayTimeout: 1800,
            loop: true,
            margin: 10,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 1,
                },
                10000: {
                    items: 1,
                }

            }
        }
    );
});