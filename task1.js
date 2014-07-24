$('input').val('Input e-mail...').css('color','grey');

$('input').on('blur', function(){
    if($(this).val() == "")
        $(this).val('Input e-mail...').css('color','grey');
});

$('input').on('keydown', function(){
    if($(this).val() == "Input e-mail...")
        $(this).val("").css('color','black');
});

$('input').on('keyup', function(){
    if($(this).val() == "")
        $(this).val('Input e-mail...').css('color','grey');
});

