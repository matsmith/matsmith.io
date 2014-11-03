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
        $('header, section').css('height', (sH + 'px'));
    });

    // Parallax
    $('header, section').each(function() {
        $(this).parallax('50%', 0.3, true);
    });

    // Scroll to next section
    $('.control-btn').on('click', function() {
        $.scrollTo($(this).closest('header, section').next(), {
            axis : 'y',
            duration : 500
        });
        return false;
    });


    $('html').addClass('loaded');
});
