


function refreshList() {
    
    $('#list').empty();

    $.get('/todos', function (data) {

        for (let todo of data) {
            $('#list').append(`<li>${todo}</li>`);
        }
    });

}

refreshList();


$('#btn').click(function () {
    
    const todo = $('#inp').val();

    $.post('/todos', { todo }, function (res) {
        console.log(res);
        $('#inp').val("");
        refreshList();
    })

})

