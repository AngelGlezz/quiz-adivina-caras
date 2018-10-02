
var ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();
var ventana_ancho = $(window).width();
var disable=true;
var active_ace=false;
var input_text=false;
var input_text2=false;
var input_goles=false;
var input_radio=false;
var tenis_name="";
var respuestas_array = new Array();
var final_time = 0;
var aciertos = 0;
var removeTimeline = true;

$("#indepth_boton_empezar").on("click",function(){
	$("#indepth_boton_empezar").click(false);
	 ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();
	 
	  var data = {
  "preguntas": [
    {
      "pregunta": "Adivina al jugador",
      "respuestas": [
        {
          "respuesta": "a",
          "tipo": "false"
        },
        {
          "respuesta": "b",
          "tipo": "false"
        },
        {
          "respuesta": "c",
          "tipo": "true"
        }
      ]
    },
    {
      "pregunta": "Adivina al jugador",
      "respuestas": [
        {
          "respuesta": "a",
          "tipo": "true"
        },
        {
          "respuesta": "b",
          "tipo": "false"
        },
        {
          "respuesta": "c",
          "tipo": "false"
        }
      ]
    },
    {
      "pregunta": "Adivina al jugador",
      "respuestas": [
        {
          "respuesta": "a",
          "tipo": "false"
        },
        {
          "respuesta": "b",
          "tipo": "false"
        },
        {
          "respuesta": "c",
          "tipo": "true"
        }
      ]
    },
    {
      "pregunta": "Adivina al jugador",
      "respuestas": [
        {
          "respuesta": "a",
          "tipo": "true"
        },
        {
          "respuesta": "b",
          "tipo": "false"
        },
        {
          "respuesta": "c",
          "tipo": "false"
        }
      ]
    },
    {
      "pregunta": "Adivina al jugador",
      "respuestas": [
        {
          "respuesta": "a",
          "tipo": "false"
        },
        {
          "respuesta": "b",
          "tipo": "true"
        },
        {
          "respuesta": "c",
          "tipo": "false"
        }
      ]
    },
    {
      "pregunta": "Adivina al jugador",
      "respuestas": [
        {
          "respuesta": "a",
          "tipo": "true"
        },
        {
          "respuesta": "b",
          "tipo": "false"
        },
        {
          "respuesta": "c",
          "tipo": "false"
        }
      ]
    },
    {
      "pregunta": "Adivina al jugador",
      "respuestas": [
        {
          "respuesta": "a",
          "tipo": "false"
        },
        {
          "respuesta": "b",
          "tipo": "true"
        },
        {
          "respuesta": "c",
          "tipo": "false"
        }
      ]
    },
    {
      "pregunta": "Adivina al jugador",
      "respuestas": [
        {
          "respuesta": "a",
          "tipo": "false"
        },
        {
          "respuesta": "b",
          "tipo": "false"
        },
        {
          "respuesta": "c",
          "tipo": "true"
        }
      ]
    }
  ]
};
		  preguntas=data.preguntas;
		 
		 $("#indepth_pregunta_cont").html("");
		 
		 $.each(preguntas, function( i, item ) {
			 
			var div=' <div class="indepth_pregunta_item"><div class="indepth_pregunta">'+(i+1)+'- '+item.pregunta+'</div><div class="indepth_pregunta_main"><div class="indepth_pregunta_img"><img src="'+urlIndepth+'images/preguntas/'+(i+1)+'.png" /></div><div class="indepth_respuestas_cont" num="'+i+'">';
				
			var div_items="";
			$.each(item.respuestas, function( j, items ) {
				div_items+='<div class="indepth_respuesta_item active" num="'+j+'"><img src="'+urlIndepth+'images/boton/'+i+'-'+items.respuesta+'.jpg"></div>';
			});						
										
			var div_fin='</div></div></div>';
			 
			 $("#indepth_pregunta_cont").append(div+div_items+div_fin);			 
		 });

		 
		 $("#indepth_page1").css({
			"top":ventana_alto,
			"visibility":"visible",
			"height": "auto"
		  });
		
		//$("#nav-bar-stats,#top-bar-wrapper,#body-wrapper").hide();
		
		//$("#indepth_page1").show();
		
		$("#indepth_page1").animate({
      top: 0
    },2000);
		
		$(document).on("click",".indepth_respuesta_item",function(){
				
			var respuesta_cont = $(this).parent();
			var pregunta_num = respuesta_cont.attr("num");
			var respuesta_num = $(this).attr("num");
			var pregunta_obj = preguntas[pregunta_num];
			var respuesta_obj = pregunta_obj.respuestas[respuesta_num];

      var content = parseInt($(".indepth_pregunta_item").css("height"));
      var margin = parseInt($(".indepth_pregunta_item").css("margin-bottom"));
      var mov = content + margin;
      //var mov = content + margin + padding + haderMenu;
      var image_c = $(this).parent().prev().find('img')[0];
      $(image_c).attr('src', urlIndepth+'images/resueltas/'+(parseInt(pregunta_num)+1)+'.png');
      $(".indepth_pregunta_item").animate({"top": "-="+mov+"px"}, 6000);

      console.log(mov);
			
			tipo= (respuesta_obj.tipo === "true");
			
			if(tipo){
				$(this).addClass("bien");
				respuestas_array[pregunta_num]=true;
			}else{
				$(this).addClass("mal");
				respuestas_array[pregunta_num]=false;
			}
			
			respuesta_cont.find('.indepth_respuesta_item').removeClass("active").addClass("disable");
			respuesta_cont.find('.indepth_respuesta_item').click(false);
						
						
						
			if(preguntas.length == respuestas_array.length){
				respuestas_num=0;
				
					$.each(respuestas_array, function( i, item ) {
					  	if(item!=undefined)
					  		respuestas_num++;
				  	});
				  	
				 console.log("respuestas " + respuestas_num);
				 console.log(respuestas_num);
				
				if(respuestas_num == preguntas.length){
					window.setTimeout(finish_test, 700);
				}
				
			}
			
		});
		
});


var totalfb = "";
function finish_test(){

  ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();;
  var ventana_ancho = $(window).width();
  $(".inner").show();

  $("#indepth_resultados").css({
      "visibility": "visible",
      "position":"fixed",
      "top": 0,
      "left": -ventana_ancho
    });
    
    $("#indepth_resultados").animate({
      "left": 0
    },2000, function(){
      $("html, body, #indepth_page1").css("overflow","hidden");
    });

    $.each(respuestas_array, function( i, item ) {
      if(item){
        aciertos++;
      }
    });
    
    aficionado="";
    msg="";
    
    if(aciertos<=3){
      msg="¡Nooooooooooo! ¡Nooooooooooo! ¡Corre antes de que el Piojo diga que fuiste tú el culpable de todo!";
      totalfb = "mal";
      $("#indepth_resultados").css({
      "background-image": "url("+urlIndepth+"images/resultados-1.jpg)"
    });
    }

    if(aciertos>=4 && aciertos<=5){
      msg="Pues mira, peor es nada. Al menos Herrera no tendrá pretexto para querer correrte o echarte la culpa";
      totalfb = "maso";
      $("#indepth_resultados").css({
      "background-image": "url("+urlIndepth+"images/resultados-2.jpg)"
    });
    }

    if(aciertos>=6){
      msg="¡HÉROE! ¿Gudiño qué? ¡Tú eres el mero mero! ¡Vámonos al Ángel!";
      totalfb = "bien";
      $("#indepth_resultados").css({
      "background-image": "url("+urlIndepth+"images/resultados-3.jpg)"
    });
    }
    
    $(".indepth_result_container").html(msg);

  $("#indepth_resultados").animate({
      "left": 0
    },2000, function(){
      $("html, body, #indepth_page1").css("overflow","hidden");
    });

    $("#indepth_twittear").click(function(){
      var text = "";
    if (aciertos <= 3) {
      text = encodeURIComponent("¡Nooooooooooo! ¡Nooooooooooo! ¡Corre antes de que el Piojo diga que fuiste tú el culpable de todo!");
    } else if (aciertos >= 4 && aciertos <= 5) {
      text = encodeURIComponent("Pues mira, peor es nada. Al menos Herrera no tendrá pretexto para querer correrte o echarte la culpa");
    } else if (aciertos >= 6) {
      text = encodeURIComponent("¡HÉROE! ¿Gudiño qué? ¡Tú eres el mero mero! ¡Vámonos al Ángel!");
    }
    
    var url = encodeURIComponent("http://juanfutbol.com/indepth/adivina-juan-caras");
    window.open("https://twitter.com/share?text="+text+"&hashtags=JFQuiz&url="+url,"","width=500, height=300");
  });

  $("#indepth_facebook").click(function(){
    var url = encodeURIComponent("http://juanfutbol.com/indepth/adivina-juan-caras?m="+totalfb);
    console.log(url);
    window.open("https://www.facebook.com/sharer/sharer.php?u="+url,"","width=500, height=300");
  });
}



var indepth_sizeAdjust = function(firstTime){
	$(".indepth_page").each(function(){
		if($(this).attr("resize") == "true"){
			var h = parseInt($(this).width(),10) / $(this).attr("width") * $(this).attr("height");
			$(this).css("height", h + "px");
		}else if(firstTime && $(this).attr("resize") == "false"){
			$(".indepth_background", $(this)).css("min-width", $(this).attr("width") + "px");
			$(this).css("height", $(this).attr("height") + "px");
		}
	})
}

var indepth_preloadImgs = function(){
	$("img[over]").each(function(){
		$(this).attr("out", $(this).attr("src"));
		$(this).on("mouseenter", function(){
			$(this).attr("src", $(this).attr("over"));
		}).on("mouseleave", function(){
			$(this).attr("src", $(this).attr("out"));
		}).css("cursor", "pointer");

		var tmp = $("<img/>");
		tmp.attr("src", $(this).attr("over"));
		tmp.css({"position":"absolute", "top":"-9999px", "left":"-9999px"})
		tmp.appendTo("body");
	});
}


$(document).ready(function(){
	indepth_sizeAdjust(true);
	//indepth_preloadImgs();
	ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();
	ventana_ancho = $(window).width();
	
	$("#indepth_cover").css({
		"width": (ventana_ancho)+"px",
		"height": (ventana_alto-100)+"px"	
	})
		
	$("#indepth_resultados").css({
		"width":ventana_ancho+"px",
		"height":ventana_alto+"px"
	});

  });

$(window).on("resize", function(){

	ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();
	ventana_ancho = $(window).width();

	$("#indepth_cover").css({
		"width": (ventana_ancho)+"px",
		"height": (ventana_alto-100)+"px"	
	})
		
	    $("#indepth_resultados").css({
			"width":ventana_ancho+"px",
			"height":ventana_alto+"px"
		});
});



