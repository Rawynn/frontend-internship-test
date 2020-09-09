/* Here goes your JS code */
$(document).ready(function () {
    $('#show-popup-form').on("click", function () {
        $(this).css("opacity", "0");
        $('.popup').css("animation", "down 1s forwards .5s");
        $('#show-popup-form').delay(600).hide(0);
    });

    $('.close-btn').on("click", function () {
        $('.popup').css("animation", "up 1s forwards");
        setTimeout(function () {
            $('#show-popup-form').css("opacity", "1");
        }, 600);
        $('#show-popup-form').delay(500).show(0);
    });

    function validateEmail(email) {
        let regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    }

    function validateForm(email, password, checkbox) {
        let valid = true;

        if (email == '' || !validateEmail(email)) {
            $('.form-email-wrapper .invalid-msg').show("slow");
            valid = false;
        } else {
            $('.form-email-wrapper .invalid-msg').hide("slow");
        }

        if (password == '' || password.length <= 4) {
            $('.form-pass-wrapper .invalid-msg').show("slow");
            valid = false;
        } else {
            $('.form-pass-wrapper .invalid-msg').hide("slow");
        }

        if (!checkbox) {
            $('.form-check-wrapper .invalid-msg').show("slow");
            valid = false;
        } else {
            $('.form-check-wrapper .invalid-msg').hide("slow");
        }

        return valid;
    }

    $('.popup-form').submit(function (e) {
        e.preventDefault();

        let email = document.forms["PopupForm"]["email"].value;
        let password = document.forms["PopupForm"]["password"].value;
        let checkbox = $('.popup-checkbox').is(':checked');

        if (validateForm(email, password, checkbox)) {
            $('.close-btn').unbind("click");
            setTimeout(function () {
                $('.popup').css("animation", "up 1s forwards");
                $('.success-msg').css(
                    "display", "block");
                setTimeout(function () {
                    $('.success-msg').css("opacity", "1");
                }, 1500);
            }, 3000);
        }
    });

    $('.form-item-wrapper input').bind("keyup", function () {
        let email = document.forms["PopupForm"]["email"].value;
        let password = document.forms["PopupForm"]["password"].value;
        let checkbox = $('.popup-checkbox').is(':checked');
        validateForm(email, password, checkbox);
    });

    $('.popup-checkbox').on("click", function () {
        let email = document.forms["PopupForm"]["email"].value;
        let password = document.forms["PopupForm"]["password"].value;
        let checkbox = $('.popup-checkbox').is(':checked');
        validateForm(email, password, checkbox);
    });
});