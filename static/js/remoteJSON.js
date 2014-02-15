// JS pra fazer possível pegar json de outros servidores remotamente.

function createCORSRequest(method, url) {
	var xhr = new XMLHttpRequest();
	if ("withCredentials" in xhr) {
		// Check if the XMLHttpRequest object has a "withCredentials" property.
		// "withCredentials" only exists on XMLHTTPRequest2 objects.
		xhr.open(method, url, true);

	} else if (typeof XDomainRequest != "undefined") {
		// Otherwise, check if XDomainRequest.
		// XDomainRequest only exists in IE, and is IE's way of making CORS requests.
		xhr = new XDomainRequest();
		xhr.open(method, url);

	} else {
		// Otherwise, CORS is not supported by the browser.
		xhr = null;
	}
	return xhr;
}

function makeCorsRequest(url) {
	

	var xhr = createCORSRequest('GET', url);
	if (!xhr) {
	  	alert('CORS not supported');
    	return;
	}

	xhr.onload = function() {
	 	var responseText = xhr.responseText;
	 	console.log(responseText);
	 	return responseText;
	};

	xhr.onerror = function() {
	  	console.log('There was an error making the request!');
	  	alert('Woops, there was an error making the request.');
	};

	xhr.withCredentials = true;

	xhr.send();
}