

function myFunction() {

  var myobj = document.getElementById("image");

  myobj.remove();

}

function alertQuote(quote) {

const linebreak = '\n';

// Em Dash character code

const endash = '\u2014';

const text = `${quote.body} ${linebreak} ${endash} ${quote.author}`;

// Alert quote and credit author

alert(text);

}


async function triggerAPICall(endpoint = 'qotd', options = {}) {

// API URL

const url= `https://favqs.com/api/${endpoint}`;

// Call API

const response = await fetch(url, options);

// Wait for promise to resolve and return a JSON object from API response

return await response.json();

}



function fetchQuote(){
  // Trigger API call

triggerAPICall()

// Handle API response

.then((data) => alertQuote(data.quote));

}


function AuthCall() {
	const API_KEY = '0aa37f98cf6790bd00c62bf3bc4bc3b9';

	triggerAPICall('session', {
	    method: 'POST',
	    headers: {
	        Authorization: API_KEY
	    },
	    body: JSON.parse(data)
	}).then(response => {
		console.log(response);
	});
}
