$(function() {
    $('.burger').click(function() {
        if ($('.burger').hasClass('open')) {
            $('.burger').removeClass('open');
            $('#menu-modal').fadeOut();
        } else {
            $('.burger').addClass('open');
            $('#menu-modal').fadeIn();
        }
    });
});