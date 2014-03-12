(function($) {
    $(function() {
        var videobackground = new $.backgroundVideo($('.background-day-to-day'), {
            "align" : "centerXY",
            "path" : "video/",
            "width": 854,
            "height": 480,
            "filename" : "preview",
            "types" : ["mp4", "ogg", "webm"]
        });

        // Sections height & scrolling
        $(window).resize(function() {
            var sH = $(window).height();
            $('section').css('height', (sH + 'px'));
        });        

        // Parallax
        $('section').each(function() {
            $(this).parallax('50%', 0.3, true);
        });

        $(window).resize().scroll();

        // Scroll to next section
        $('.control-btn').on('click', function() {
            $.scrollTo($(this).closest('header, section').next(), {
                axis : 'y',
                duration : 500
            });
            return false;
        });

    });

    $(window).load(function() {
        $('html').addClass('loaded');
        $(window).resize().scroll();
    });
})(jQuery);