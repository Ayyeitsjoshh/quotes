location.reload();

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



async function fetchQuote() {

// API URL

const url= 'https://favqs.com/api/qotd';

// Call API

const response = await fetch(url);



// Wait for promise to resolve and return a JSON object from API response

return await response.json();

}



// Trigger API call

fetchQuote()

// Handle API response

.then((data) => alertQuote(data.quote));
