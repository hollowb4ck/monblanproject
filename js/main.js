'use sctrict'
$('#sandbox-container input').datepicker({
    format: "mm_dd_yyyy",
    autoclose: true,
    orientation: "bottom left"
});

$('#sandbox-container-2 input').datepicker({
    format: "mm_dd_yyyy",
    autoclose: true,
    orientation: "bottom left"
});
[].forEach.call($('.clear-input'),function(el){
    el.addEventListener('click', function (e) {
    	$('#sandbox-container input')[0].value = "";
		$('#sandbox-container-2 input')[0].value = "";

    })
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