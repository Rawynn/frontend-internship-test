/* Here goes your JS code */
$(document).ready(function () {
    $('#show-popup-form').on("click", function () {
        $(this).css("opacity", "0");
        $('.popup').css("animation", "down 1s forwards .5s");
    });

    $('.close-btn').on("click", function () {
        $('.popup').css("animation", "up 1s forwards");
        setTimeout(function () {
            $('#show-popup-form').css("opacity", "1");
        }, 600);

    });
});