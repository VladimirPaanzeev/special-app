$(function(){
    function showPopur() {
        $('.popur-container').css('display', 'flex');
    }
    let closePopur = function(){
        $('.popur-container').css('display', 'none');
    };
    let cleanForm = function(){
        $('.popur-container > input[type="text"]').val('');
    };

    $('order-call').on('click', function(){
        showPopur();
    });

    $('.close').on('click', function(){
        cleanForm();
    });

});