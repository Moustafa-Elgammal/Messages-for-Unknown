/*
	by Moustafa Elgammal
	elgammal.me | @elgammalx
	Free for personal and commercial use.
*/

jQuery(document).ready(function($){
	
	/**
	*	Request function
	*	@phone single phone number
	*	@message text messages
	*	@url correct url
	*/
	var openIn = function(phone, message, url){

		// assimble the full url
		url = url + "?phone=" + phone + "&text=" + message;
		// open
		window.open(url, '_blank');
	}

	/**
	*	return the correct uri 
	*	Browser 
	*	Mobile App
	*/
	var urlCreation = function (){

		//	get the custom uri
		if(navigator.appVersion.indexOf("Win") == -1){
			// for Mobile App
			return "whatsapp://send";
		}
		else
		{	
			// fro web browser
			return "https://web.whatsapp.com/send";
		}
	}

	/**
	*	clickSubmit
	*	form submitted
	*/
	var clickSubmit = function(e){

		// Disable custom events of the form
		e.preventDefault();	

		//get array of phone numbers
		var phonesArray = $('#phones').val().split(','); 

		//get message text and encode
		var messageText = encodeURIComponent($('#message').val());

		//set delay to exeute each message
		var timeDelay = parseInt($('#delay').val());

		try{
			// check at least phone number
			if(!phonesArray[0].length){
				throw "at least input one phone number.";
			}

			//	handle empty messages
			if(!messageText.length){
				throw "Empty Message";
			}

			var x = 0; // no delay for first number
			phonesArray.forEach(function(phone){

				//	fire the messages
				setTimeout(function() {
					x= timeDelay * 1000; //	change delay
					url = urlCreation(); // get the custom uri
  					openIn(phone, messageText, url); // open 
				}, x);

			});

		}
		catch (err){ // handle rules exception
			alert("Exception: " + err);
		}

	}

	// Execute the app
	$('#submit').on('click', function (e){clickSubmit(e);});
});