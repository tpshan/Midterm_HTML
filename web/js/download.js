$(document).ready(function(){
    $(function(){
        $('a[href$=".pdf"]').after('&nbsp;<img src="./image/pdfPic.png" alt="" />');
        $('a[href$=".odt"]').after('&nbsp;<img src="./image/odtPic.png" alt="" />');
    });

});