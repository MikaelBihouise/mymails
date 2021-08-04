let count = $('.message');
let countStart = count.length;

function countMessage() {
    $('#count-down').text(countStart);
};

$('.button1').click(function () {
    let input = $('#addmessage').val();
    console.log('click')
    $('body').append(`<div class="message">`);
    $('.message:last').append(`<img src="assets/avatar-1.jpg" alt="avatar" width="60px" height="60px">`);
    $('.message:last').append(`<div class="text">`);
    $('.text:last').append(`<h6>Mikael B</h6>`);
    $('.text:last').append(`<p>` + input + `</p>`);
    $('.message:last').append(`<a href="#" class="trash"><i class="fas fa-trash-alt"></i></a>`);
    input = $('#addmessage').val('');
    countStart++;
    countMessage();
})

$('body').on('click', '.trash', function () {
    $(this).parent().remove();
    countStart--;
    countMessage();
})

$('.button2').click(
    function () {
        $('h6').each(function() {
            if($('#search-bar').val() != $(this).text()) {
                $(this).parent().parent().toggle(300); 
            } else {
                $(this).parent().parent().show();
            }
        })
        $('#search-message').val('');
    }
)