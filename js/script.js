$(function() {
    "use strict";
    $(window).load(function() {
        $("body").addClass("loaded")
    }), $(".parallax-section").parallax({
        speed: .3
    }), $("body").scrollspy({
        target: ".menu"
    }), $(document).ready(function() {
        $(".menu li a, .hire-background a").on("click", function(e) {
            e.preventDefault(), $("html,body").animate({
                scrollTop: $(this.hash).offset().top
            }, 800, "easeInOutQuart")
        })
    }), $(".dial").knob({
        width: "100",
        height: "100",
        thickness: .03,
        fgColor: "rgb(255, 255, 255)",
        bgColor: "rgba(255, 255, 255, .0)",
        inputColor: "rgb(255, 255, 255)",
        readOnly: !0,
        font: "Open Sans",
        fontWeight: "300",
        parse: function(e) {
            return parseInt(e, 10)
        },
        format: function(e) {
            return e + "%"
        }
    }), $(".dial").each(function() {
        var e = $(this),
            a = e.data("number");
        $(".skill-bar").appear(function() {
            $({
                value: 0
            }).animate({
                value: a
            }, {
                duration: 2e3,
                easing: "swing",
                step: function() {
                    e.val(Math.ceil(this.value)).trigger("change")
                }
            })
        }, {
            accX: 0,
            accY: -10
        })
    }), $("#contactform").on("submit", function(e) {
        var a = $("#name").val(),
            o = $("#email").val(),
            n = $("#message").val();
        "" == a && $("#name").css("border-color", "rgba(255, 0, 0, 0.7)"), "" == o && $("#email").css("border-color", "rgba(255, 0, 0, 0.7)"), "" == n ? $("#message").css("border-color", "rgba(255, 0, 0, 0.7)") : $.ajax({
            url: "contact_form.php",
            data: $(this).serialize(),
            type: "POST",
            success: function() {
                $("#success").show().fadeIn(1e3), $("#contactform").each(function() {
                    this.reset()
                })
            },
            error: function() {
                $("#error").show().fadeIn(1e3)
            }
        }), e.preventDefault()
    }), $(".facts-background [data-to]").each(function() {
        var e = $(this);
        e.appear(function() {
            e.countTo({
                speed: 1500,
                onComplete: function() {
                    e.data("append") && e.html(e.html() + e.data("append"))
                }
            })
        }, {
            accX: 0,
            accY: -10
        })
    });
    var e = "img/marker.png",
        a = 42.2808207,
        o = -83.751206,
        n = new GMaps({
            el: "#map-canvas",
            lat: a,
            lng: o,
            zoom: 16,
            scrollwheel: !1
        });
    n.addMarker({
        lat: a,
        lng: o,
        icon: e
    });
    var t = $(".menu"),
        s = $(".toggle-btn");
    s.on("click", function(e) {
        t.hasClass("show-menu") ? t.removeClass("show-menu") : t.addClass("show-menu"), e.stopPropagation()
    }), s.on("click", function() {
        s.hasClass("toggle-close") ? s.removeClass("toggle-close") : s.addClass("toggle-close")
    }), $(document).on("click", function() {
        t.hasClass("show-menu") && t.removeClass("show-menu"), s.hasClass("toggle-close") && s.removeClass("toggle-close")
    })
});
