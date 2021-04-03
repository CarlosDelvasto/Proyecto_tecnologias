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



$(document).ready(function(){
    $('Panel_InicioSesion').show();
    $('form.p #1a').click(function(){
        $('.Panel_InicioSesion').hide();

        var activeBtn = $(this).attr('href');
        $('.Panel_InicioSesion').hide();
        $(Panel_Registro).show();
        return false;

    });
});



$(document).ready(function(){
    $('Panel_Registro').show();
    $('form.p #2a').click(function(){
        $('.Panel_Registro').hide();

        var activeBtn = $(this).attr('href');
        $('.Panel_Registro').hide();
        $(Panel_InicioSesion).show();
        return false;

    });
});




window.onload = iniciar;
function iniciar()
{
document.getElementById ("enviar").addEventListener('click',validar,false);

}

function validaIniciosesion(){
    var element = document.getElementsByClassName ("controls");
    if (MediaElementAudioSourceNode.value == "")
    {
        alert("El campo no puede estar vacío");
        return false;
    }
    return true;
}

function validaRegistro(){
    var element = document.getElementsByClassName ("controlsr");
    if (MediaElementAudioSourceNode.value == "")
    {
        alert("El campo no puede estar vacío");
        return false;
    }
    return true;
}