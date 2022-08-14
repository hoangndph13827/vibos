$(function () {
    var form = $('#main-contact-form');
    var formMessages = $('#success-fail-info');

    $(form).submit(function (e) {
        e.preventDefault();
        var formData = $(form).serialize();
        $.ajax({
            type: 'POST',
            url: $(form).attr('action'),
            data: formData
        }).done(function (response) {
            $(formMessages).removeClass('bg-danger');
            $(formMessages).addClass('bg-success').delay('8000').fadeOut('500');
            $(formMessages).html('<div><i class="lni-check-mark-circle"></i> Your message has been sent.</div>');
            $('#name').val('');
            $('#email').val('');
            $('#message').val('');
        }).fail(function (data) {
            $(formMessages).removeClass('bg-success');
            $(formMessages).addClass('bg-danger').delay('8000').fadeOut('500');
            if (data.responseText !== '') {
                $(formMessages).text(data.responseText)
            } else {
                $(formMessages).html('<div><i class="lni-warning"></i> Oops! an error occured.</div>');
            }
        })
    })
})