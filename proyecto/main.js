$(document).ready(function(){
    $('ul.tabs li a:first').addClass('active');
    $('.secciones article').hide();
    $('.secciones article:first').show();

    $('ul.tabs li a').click(function(){
        $('ul.tabs li a').removeClass('active');
        $(this).addClass('active');
        $('.secciones article').hide();

        var activeTab = $(this).attr('href');
        $('.secciones section').hide(); 
        $(activeTab).show();
        return false;


    });
});
$(document).ready(function(){
    
    $('.secciones section').hide();
    $('ul.btn li a').click(function(){
        $('.secciones section').hide();

        var activeBtn = $(this).attr('href');
        $('.secciones article').hide();
        $(activeBtn).show();
        return false;

    });
});