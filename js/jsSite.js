function ouvertureMenu(){
$(document).ready(function(){
        $(".menu").hide();
        $("#bouttonMenu").click(function(){
            $("#nomNav").toggle();
            $(".menu").toggle();

        });
        $(".verifClick").click(function(){
            $("#nomNav").toggle();
            $(".menu").toggle();
        });    
  });
}
function ouvertureProjet(){
    $("#clickP1").click(function(){
        $("#contenuProjet>p").hide();
        $("#contenuPpe2").hide();
        $("#contenuPpe3").hide();
        $("#contenuPpe4").hide();
        $("#contenuStage1").hide();
        $("#contenuStage2").hide();
        $("#contenuPpe1").show();
        $("#contenuPpe2").removeClass('active');
        $("#contenuPpe3").removeClass('active');
        $("#contenuPpe4").removeClass('active');
        $("#contenuStage1").removeClass('active');
        $("#contenuStage2").removeClass('active');
        
        if($("#contenuPpe1").hasClass('active'))
        {
            $("#contenuPpe1").hide();
            $("#contenuProjet>p").show();
            $("#contenuPpe1").removeClass('active');
        }
        else{
            $("#contenuPpe1").addClass('active');
        }
        
    });

    $("#clickP2").click(function(){
        $("#contenuProjet>p").hide();
        $("#contenuPpe1").hide();
        $("#contenuPpe3").hide();
        $("#contenuPpe4").hide();
        $("#contenuStage1").hide();
        $("#contenuStage2").hide();
        $("#contenuPpe2").show();
        $("#contenuPpe1").removeClass('active');
        $("#contenuPpe3").removeClass('active');
        $("#contenuPpe4").removeClass('active');
        $("#contenuStage1").removeClass('active');
        $("#contenuStage2").removeClass('active');
        
        if($("#contenuPpe2").hasClass('active'))
        {
            $("#contenuPpe2").hide();
            $("#contenuProjet>p").show();
            $("#contenuPpe2").removeClass('active');
        }
        else{
            $("#contenuPpe2").addClass('active');
        }
        
    });

    $("#clickP3").click(function(){
        $("#contenuProjet>p").hide();
        $("#contenuPpe2").hide();
        $("#contenuPpe1").hide();
        $("#contenuPpe4").hide();
        $("#contenuStage1").hide();
        $("#contenuStage2").hide();
        $("#contenuPpe3").show();
        $("#contenuPpe2").removeClass('active');
        $("#contenuPpe1").removeClass('active');
        $("#contenuPpe4").removeClass('active');
        $("#contenuStage1").removeClass('active');
        $("#contenuStage2").removeClass('active');
        
        if($("#contenuPpe3").hasClass('active'))
        {
            $("#contenuPpe3").hide();
            $("#contenuProjet>p").show();
            $("#contenuPpe3").removeClass('active');
        }
        else{
            $("#contenuPpe3").addClass('active');
        }
        
    });

    $("#clickP4").click(function(){
        $("#contenuProjet>p").hide();
        $("#contenuPpe2").hide();
        $("#contenuPpe3").hide();
        $("#contenuPpe1").hide();
        $("#contenuStage1").hide();
        $("#contenuStage2").hide();
        $("#contenuPpe4").show();
        $("#contenuPpe2").removeClass('active');
        $("#contenuPpe3").removeClass('active');
        $("#contenuPpe1").removeClass('active');
        $("#contenuStage1").removeClass('active');
        $("#contenuStage2").removeClass('active');
        
        if($("#contenuPpe4").hasClass('active'))
        {
            $("#contenuPpe4").hide();
            $("#contenuProjet>p").show();
            $("#contenuPpe4").removeClass('active');
        }
        else{
            $("#contenuPpe4").addClass('active');
        }
        
    });

    $("#clickS1").click(function(){
        $("#contenuProjet>p").hide();
        $("#contenuPpe2").hide();
        $("#contenuPpe3").hide();
        $("#contenuPpe4").hide();
        $("#contenuPpe1").hide();
        $("#contenuStage2").hide();
        $("#contenuStage1").show();
        $("#contenuPpe2").removeClass('active');
        $("#contenuPpe3").removeClass('active');
        $("#contenuPpe4").removeClass('active');
        $("#contenuPpe1").removeClass('active');
        $("#contenuStage2").removeClass('active');
        
        if($("#contenuStage1").hasClass('active'))
        {
            $("#contenuStage1").hide();
            $("#contenuProjet>p").show();
            $("#contenuStage1").removeClass('active');
        }
        else{
            $("#contenuStage1").addClass('active');
        }
        
    });

    $("#clickS2").click(function(){
        $("#contenuProjet>p").hide();
        $("#contenuPpe2").hide();
        $("#contenuPpe3").hide();
        $("#contenuPpe4").hide();
        $("#contenuPpe1").hide();
        $("#contenuStage1").hide();
        $("#contenuStage2").show();
        $("#contenuPpe2").removeClass('active');
        $("#contenuPpe3").removeClass('active');
        $("#contenuPpe4").removeClass('active');
        $("#contenuPpe1").removeClass('active');
        $("#contenuStage1").removeClass('active');
        
        if($("#contenuStage2").hasClass('active'))
        {
            $("#contenuStage2").hide();
            $("#contenuProjet>p").show();
            $("#contenuStage2").removeClass('active');
        }
        else{
            $("#contenuStage2").addClass('active');
        }
        
    });
}

function ouvertureSituationsObligatoire(){
    $('#titreSitObl').click(function(){
        $('.table-situOblig').toggle();
    });
}
function ouvertureActivitesCommunes(){
    $('#titreActCom').click(function(){
        $('.table-ActivCom').toggle();
    });
}
function ouvertureActiviteSlam(){
    $('#titreActSLAM').click(function(){
        $('.table-ActivSlam').toggle();
    });
}

function agrandireFeuilleRecette(){
    $('#feuilleRecette').click(function(){
        $(".feuilleRecetteAffiche").show();
        $('#page').css({
           
           opacity:'0.2',
          
        });
        
    });
}
function reduireFeuilleRecette(){
    $('#feuilleRecetteGrand').click(function(){
        $(".feuilleRecetteAffiche").hide();
        $('#page').css({ 
           opacity:'1'
        });
    });
}
function agrandireSuiviBug(){
    $('.suiviBug').click(function(){
        $(".suiviBugAffiche").show();
        $('#page').css({ 
           opacity:'0.2',
        });
    });
}
function reduireSuiviBug(){
    $('.suiviBugGrand').click(function(){
        $(".suiviBugAffiche").hide();
        $('#page').css({ 
           opacity:'1'

        });
    });
}
function agrandireBdd(){
    $('.bdd').click(function(){
        $('.bddAffiche').show();
        $('#page').css({ 
           opacity:'0.2',
        });
    });
}
function reduireBdd(){
    $('.bddGrand').click(function(){
        $('.bddAffiche').hide();
        $('#page').css({ 
           opacity:'1'
        });
    });
}
function agrandireDocker(){
    $('.docker').click(function(){
        $('.dockerAffiche').show();
        $('#page').css({ 
           opacity:'0.2',
        });
    });
}
function reduireDocker(){
    $('.dockerGrand').click(function(){
        $('.dockerAffiche').hide();
        $('#page').css({ 
           opacity:'1'
        });
    });
}
function agrandireErm(){
    $('.erm').click(function(){
        $('.ermAffiche').show();
        $('#page').css({ 
           opacity:'0.2',
        });
    });
}
function reduireErm(){
    $('.ermGrand').click(function(){
        $('.ermAffiche').hide();
        $('#page').css({ 
           opacity:'1'
        });
    });
}

function appelDesFonctions(){
    ouvertureMenu();
    ouvertureProjet();
    ouvertureSituationsObligatoire();
    ouvertureActivitesCommunes();
    ouvertureActiviteSlam();
    agrandireFeuilleRecette();
    reduireFeuilleRecette();
    agrandireSuiviBug();
    reduireSuiviBug();
    agrandireBdd();
    reduireBdd();
    agrandireDocker();
    reduireDocker();
    agrandireErm();
    reduireErm();
}


appelDesFonctions();

$("#contenuPpe1").hide();
$("#contenuPpe2").hide();
$("#contenuPpe2").hide();
$("#contenuPpe3").hide();
$("#contenuPpe4").hide();
$("#contenuStage1").hide();
$("#contenuStage2").hide();
$(".table-situOblig").hide();
$(".table-ActivCom").hide();
$(".table-ActivSlam").hide();
$(".feuilleRecetteAffiche").hide();
$(".suiviBugAffiche").hide();
$(".bddAffiche").hide();
$('.dockerAffiche').hide();
$('.ermAffiche').hide();





