$('#btn').click(function (e) {
    console.log(e)
    console.log('button clicked');
});


$('h1').on('click', function () {
    $(this).css('color', 'red');
});

$('div').on('click', function () {
    $(this).hide();
});

$('#inp').keypress(function (e) {
    if (e.which === 13) {
        console.log('You Hit the Enter')
    }
    
})