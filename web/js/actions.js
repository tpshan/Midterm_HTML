$(document).ready(function(){
    $('#q1').click(function() {
        if($(this).attr('src') === './image/downArrow.png') {
            $(this).attr('src', './image/upArrow.png');
            $(this).attr('alt', 'close');
            $('#a1').slideDown(400);
        }
        else {
            $(this).attr('src', './image/downArrow.png');
            $(this).attr('alt', 'open');
            $('#a1').slideUp(400);
        }
        $('#a1').toggleClass('hide');
    });
    $('#q2').click(function() {
        if($(this).attr('src') === './image/downArrow.png') {
            $(this).attr('src', './image/upArrow.png');
            $(this).attr('alt', 'close');
            $('#a2').slideDown(400);
        }
        else {
            $(this).attr('src', './image/downArrow.png');
            $(this).attr('alt', 'open');
            $('#a2').slideUp(400);
        }
        $('#a2').toggleClass('hide');
    });
    $('#q3').click(function() {
        if($(this).attr('src') === './image/downArrow.png') {
            $(this).attr('src', './image/upArrow.png');
            $(this).attr('alt', 'close');
            $('#a3').slideDown(400);
        }
        else {
            $(this).attr('src', './image/downArrow.png');
            $(this).attr('alt', 'open');
            $('#a3').slideUp(400);
        }
        $('#a3').toggleClass('hide');
    });
    $('#q4').click(function() {
        if($(this).attr('src') === './image/downArrow.png') {
            $(this).attr('src', './image/upArrow.png');
            $(this).attr('alt', 'close');
            $('#a4').slideDown(400);
        }
        else {
            $(this).attr('src', './image/downArrow.png');
            $(this).attr('alt', 'open');
            $('#a4').slideUp(400);
        }
        $('#a4').toggleClass('hide');
    });
});
