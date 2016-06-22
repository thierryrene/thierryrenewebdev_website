/**
* Created with thierry_portfolio.
* User: thierryrene
* Date: 2014-09-09
* Time: 09:31 PM
* To change this template use Tools | Templates.
*/

//funcao para criar animação em alguns elementos ao acessar a página index

$(document).ready(function() {

	// $(document).on( "click", function() {
	// 	console.log( "Consegui configurar o jquery no template!" );
	// });
	
	$('body').addClass('animated fadeIn').css("animation-duration", "3s");
	
	$('h1', 'h2').addClass('animated fadeIn').css("animation-duration", "3s");
	$('h2').addClass('animated fadeIn').css("animation-delay", "3s");
	
	$('p').addClass('animated fadeIn').css("animation-delay", "3s");
	
});


	
