$(document).ready(function () {

  $('#form-submit').on('click', function (event) {
    if ($('#telephone-input')[0].value === '') {
      event.preventDefault();
      //add missing notice
    }
  });

  $('#business-card-checkbox').on('change', function () {
    $('#business-card-section').toggleClass('hidden');
  });

});