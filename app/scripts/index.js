var template = require('./view')

$(document).on('click', 'button', function () {
  $('h1').toggleClass('active')
})

$('.cosmos').html(template())
