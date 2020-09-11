/* Here goes your JS code */
$(function () {
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
        let mailError = $('.popup-form-item-email .invalid-msg');
        let passError = $('.popup-form-item-pass .invalid-msg');
        let checkboxError = $('.popup-form-item-check .invalid-msg');

        if (email === '' || !validateEmail(email)) {
            mailError.show("slow");
            valid = false;
        } else {
            mailError.hide("slow");
        }

        if (password === '' || password.length <= 4) {
            passError.show("slow");
            valid = false;
        } else {
            passError.hide("slow");
        }

        if (!checkbox) {
            checkboxError.show("slow");
            valid = false;
        } else {
            checkboxError.hide("slow");
        }

        return valid;
    }

    $('.popup-form').submit(function (e) {
        e.preventDefault();

        let email = $('.popup-form input[type="email"').val();
        let password = $('.popup-form input[type="password"').val();
        let checkbox = $('#popup-checkbox').is(':checked');

        if (validateForm(email, password, checkbox)) {
            $('.close-btn').unbind("click");
            setTimeout(function () {
                $('.popup').css("animation", "up 1s forwards");
                $('.success-msg').css("display", "block");
                setTimeout(function () {
                    $('.success-msg').css("opacity", "1");
                }, 1500);
            }, 3000);
        }
    });

    $('.popup-form-item input').bind("keyup", function () {
        let email = $('.popup-form input[type="email"').val();
        let password = $('.popup-form input[type="password"').val();
        let checkbox = $('#popup-checkbox').is(':checked');
        validateForm(email, password, checkbox);
    });

    $('#popup-checkbox').on("click", function () {
        let email = $('.popup-form input[type="email"').val();
        let password = $('.popup-form input[type="password"').val();
        let checkbox = $('#popup-checkbox').is(':checked');
        validateForm(email, password, checkbox);
    });
});