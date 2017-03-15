$(document).ready(function () {

    $('#form-submit').on('click', function (event) {
        event.preventDefault();
        var telephoneInput = $('#telephone-input');
        if (telephoneInput[0].value === '') {
            event.preventDefault();
            if (!telephoneInput.next().hasClass('missing-info-div')) {
                var div = $('<div />', {
                    class: 'missing-info-div'
                });
                var img = $('<img />', {
                    src: './Resources/error_icn.png',
                    alt: 'error icon',
                    class: 'missing-info'
                });
                var text = $('<span />', {
                    html: 'Missing Information',
                    class: 'missing-info-text'
                });
                div.append(img, text);
                div.insertAfter(telephoneInput);
                telephoneInput.toggleClass('missing-info-input');
                telephoneInput.prevUntil('label').prev().toggleClass('missing-info-label');
            }
        }
        else if (telephoneInput.next().hasClass('missing-info-div')) {
            telephoneInput.next().remove();
            telephoneInput.toggleClass('missing-info-input');
            telephoneInput.prevUntil('label').prev().toggleClass('missing-info-label');
        }
    });

    $('#business-card-checkbox').on('change', function () {
        $('#business-card-section').toggleClass('hidden');
    });
});