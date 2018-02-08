/*
	by Moustafa Elgammal
	elgammal.me | @elgammalx
	Free for personal and commercial use.
*/

jQuery(document).ready(function($){
	// https://api.whatsapp.com/send?phone=whatsappphonenumber&text=urlencodedtext
	var openInWeb = function(phone, message){
		var url = "https://web.whatsapp.com/send";
		url = url + "?phone=" + phone + "&text=" + message;
		window.open(url, '_blank');
	}

	var clickSubmit = function(e){

		e.preventDefault();
		var phonesArray = $('#phones').val().split(',');
		var messageText = encodeURIComponent($('#message').val());
		var timeDelay = parseInt($('#delay').val());

		try{

			if(!phonesArray[0].length){
				throw "at least input one phone number.";
			}

			if(!messageText.length){
				throw "Empty Message";
			}

			phonesArray.forEach(function(phone){
				setTimeout(function() {
  					openInWeb(phone, messageText);
				}, timeDelay * 1000);

			});

		}
		catch (err){
			console.log("Excption: " + err);
		}

	}


	$('#submit').on('click', function (e){clickSubmit(e);});
});