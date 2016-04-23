//Everytime click on button will run printQuote function
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
//Array for all quote objects
var quotes = [
  { quote : 'There are no limits. There are plateaus, but you must not stay there, you must go beyond them.', source : 'Bruce Lee', year : 1998, tag : 'life' },
  { quote : 'You cannot escape the responsibility of tomorrow by evading it today.', source : 'Abraham Lincoln', citation :'Wise Words and Quotes' , year : 2000, tag : 'career' },
  { quote : 'You‘ve got to start with the customer experience and work backwards to the technology.',source : 'Steve Jobs', year : 1997, tag : 'technology' },
  { quote : 'Motivation is what gets you started. Habit is what keeps you going.', source : 'Jim Rohn', tag : 'motivation' },
  { quote : 'The best way to find yourself is to lose yourself in the service of others', source : 'Mahatma Gandhi', citation : 'The Full Spectrum Synthesis Bible',year : 2001, tag : 'life' },
  { quote : 'We need to figure out how to have the things we love, and not destroy the world.', source : 'Elon Musk', citation : 'Driving With Elon Musk',year : 2012, tag : 'technology' }
];
//Array to keep track of quote already displayed
var oldPosition = [];
//Create getRandomQuote function
function getRandomQuote(){
  do {
    for (position = 0; position < quotes.length; position +=1) {
      var position = Math.floor(Math.random() * quotes.length);//Select a random position in the list of quote
      if (oldPosition.indexOf(position) == -1) { //Condition: if a quote not displayed yet, display that quote
        oldPosition.push(position); // Add the position of the quote to the array to keep track
        return quotes[position];
        break;
      }
    }
    oldPosition =[]; //Restore the array after all quotes are displayed
  } while (oldPosition.length < quotes.length)
}
//Create getrandomColor function
function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i += 1 ) { //pick random element from letter
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
//don't display "undefined" properties from quote object
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
  //apply the string to the quote box
  document.getElementById('quote-box').innerHTML = html;
  //apply random color to background
  document.body.style.backgroundColor = getRandomColor();
  //Delete comma ',' if citation or year are undefined
  var commaHTML = '';
  if (typeof quoteObject.citation === 'undefined'){
    commaHTML += '.citation:before { content: "";font-style: normal;} ';
  } else {
    commaHTML += '.citation:before { content: ", ";font-style: normal;} ';
};
  if (typeof quoteObject.year === 'undefined'){
    commaHTML += '.year:before { content: "";font-style: normal;} ';
  } else {
    commaHTML += '.year:before {content: ", "; font-style: normal;}'
};
  document.getElementById('style').innerHTML = commaHTML;
}
