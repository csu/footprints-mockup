$(function() {
    $('.fp-gallery-section').each(function() {
        for (var i = 0; i < 4; i++) {
            $(this).append('<div class="row fp-gallery-row"></div>');
        }
    });

    $('.fp-gallery-row').each(function() {
        for (var i = 0; i < 12; i++) {
            $(this).append('<div class="col-md-1 fp-gallery-image"><img src="assets/img/placeholder-100x100.gif" width="100%" height="100%" /></div>');
        }
    });
});