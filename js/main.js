// AQUI CARGO LOS VIDEOS DE YOUTUBE CON COLORBOX EN EL HOME

$(document).ready(function(){
	//ASIGNO PROPIEDADES A VIDEO DE YOUTUBE
	$(".youtube").colorbox({iframe:true, innerWidth:640, innerHeight:480});

	// FUNCION DE SLIDER RESPOSIVE PARA PAGINA DE PRODUCTOS
	$('.galeria-slider-productos').bxSlider({
	  auto:true,
	  autoControls:true,
	  adaptiveHeight:true
	});

	// FUNCION DE SLIDER RESPOSIVE PARA HOME
	$('.slider-productos-home').bxSlider({
	auto:true,
	autoControls:true,
    slideWidth:280,
    minSlides:5,
    maxSlides:5,
    moveSlides:2,
    slideMargin:0
	});

	// FUNCION DE SLIDER RESPOSIVE PARA HOME EN TELEFONOS
	$('.slider-productos-home-smartphone').bxSlider({
	auto:true,
	autoControls:true,
    slideWidth:280,
    minSlides:2,
    maxSlides:2,
    moveSlides:2,
    slideMargin:0
	});


});

