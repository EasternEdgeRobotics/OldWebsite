(function($) {
    $(document).ready(function () {

        var frame = $('#main-slide-show');

        frame.slick({
            autoplay: true,
            autoplaySpeed: 3000,
            arrows: false,
            fade: true,
            speed: 500,
            ease: 'linear',
            infinite: true,
            swipe: false,
            centerMode: true
        });
    });
})(jQuery);
