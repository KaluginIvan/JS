function getTotal(){
    $("#total").text(function(){
        var count = 0;
        for(var j = 0; j < divs.length - 1; j++)
            if($(divs[j]).is(':checked') == true)
                count++;
        return "Total checked checkboxes: " + count;
    });
}

function addEvents(divs) {
    for(var i = 0; i < divs.length; i++) {
        divs[i].onclick = function(x) {
            return function() {
                if(x == 5)
                    $("#chosenMessage").text("You choose all");
                else
                    $("#chosenMessage").text("You choose " + (x + 1));
            }
        }(i)
    }
}

divs = $('input');

$(divs[5]).on('click', function(){
    if($(this).is(':checked')==true)
        for(var i = 0; i < divs.length - 1; i++)
            if($(divs[i]).is(':checked') == false)
                $(divs[i]).prop('checked', true);
    if($(this).is(':checked')==false)
        for(var i = 0; i < divs.length - 1; i++)
            if($(divs[i]).is(':checked') == true)
                $(divs[i]).prop('checked', false);

});

addEvents(divs);

$('input').on('click', function(){
    return getTotal();
});


