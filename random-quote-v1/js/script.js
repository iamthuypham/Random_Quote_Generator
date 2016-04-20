// event listener to respond to clicks on the page
// when user clicks anywhere on the page, the "makeQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
//Create an array of JavaScript objects to hold the data for your quotes.
var quoteList = [
  { quote : 'There are no limits. There are plateaus, but you must not stay there, you must go beyond them.', source : 'Bruce Lee', year : 1998, tag : 'life' },
  { quote : 'You cannot escape the responsibility of tomorrow by evading it today.', source : 'Abraham Lincoln', citation :'Wise Words and Quotes' , year : 2000, tag : 'career' },
  { quote : 'You‘ve got to start with the customer experience and work backwards to the technology.',source : 'Steve Jobs', year : 1997, tag : 'technology' },
  { quote : 'Motivation is what gets you started. Habit is what keeps you going.', source : 'Jim Rohn', tag : 'motivation' },
  { quote : 'The best way to find yourself is to lose yourself in the service of others', source : 'Mahatma Gandhi', citation : 'The Full Spectrum Synthesis Bible',year : 2001, tag : 'life' }
];
var oldPosition = [];

//Create getRandomQuote function
function getRandomQuote(){
  do {
    for (position = 0; position < quoteList.length; position +=1) {
      var position = Math.floor(Math.random() * quoteList.length);//Select a random position in the list of quote
      if (oldPosition.indexOf(position) == -1) {
        oldPosition.push(position);
        return quoteList[position];
        break;
      }
    }
    oldPosition =[];
  } while (oldPosition.length < quoteList.length)
}

//Create getrandomColor function
function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i += 1 ) {
        color += letters[Math.floor(Math.random() * 16)];}
    return color;
}

//Refresh the quote after 30 seconds
var intervalID = window.setInterval(printQuote,30000);

//Create printQuote function
function printQuote(){
  var quoteObject = getRandomQuote(); //store return object from getRandomQuote function
  var html = ''; //prepare html string for each properties
  html += '<p class="quote">'+quoteObject.quote+'</p>';
  html += '\n <p class="source">'+quoteObject.source;
  if (typeof quoteObject.citation === 'undefined'){
    html += '<span class="citation">'+''+'</span>';
  } else {
    html += '<span class="citation">'+ quoteObject.citation+'</span>';
  };
  if (typeof quoteObject.year === 'undefined'){
    html += '<span class="year">'+ '' +'</span>';
  } else {
    html += '<span class="year">'+quoteObject.year+'</span>';
    html += '</p>';
  };

  document.getElementById('quote-box').innerHTML = html; //apply the string to the quote box

  var color = getRandomColor();//prepare html string for <body> style
  var colorHTML = 'body { background-color: '+ color + '; color: white; font-family: "Playfair Display", serif;}';
  if (typeof quoteObject.citation === 'undefined'){
    colorHTML += '.citation:before { content: "";font-style: normal;} ';
  } else {
    colorHTML += '.citation:before {content: ", "; font-style: normal;}'
};
  if (typeof quoteObject.year === 'undefined'){
    colorHTML += '.year:before { content: "";font-style: normal;} ';
  } else {
    colorHTML += '.year:before {content: ", "; font-style: normal;}'
};
  document.getElementById('style').innerHTML = colorHTML; //apply random color to the body
}
