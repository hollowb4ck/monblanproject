'use sctrict'
$('#sandbox-container .input-group.date').datepicker({
    format: "mm_dd_yyyy",
    clearBtn: true,
    autoclose: true,
    orientation: "bottom left",
});
$('#sandbox-container-2 .input-group.date').datepicker({
    format: "mm_dd_yyyy",
    clearBtn: true,
    autoclose: true,
    orientation: "bottom left",
});

$(function () {
    $(".rel-block").slice(0, 9).show();
    $("#load-more").on('click', function (e) {
        e.preventDefault();
        $(".rel-block:hidden").slice(0, 3).slideDown();
        if ($(".rel-block:hidden").length == 0) {
            $("#load").fadeOut('slow');
        }
        $('html,body').animate({
            scrollTop: $(this).offset().top
        }, 1500);
    });
});