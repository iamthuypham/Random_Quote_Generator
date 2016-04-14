// event listener to respond to clicks on the page
// when user clicks anywhere on the page, the "makeQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
//Create an array of JavaScript objects to hold the data for your quotes.
var quoteList = [
  { quote : 'Do not pray for an easy life, pray for the strength to endure a difficult one.', source : 'Bruce Lee', year : 1950, tag : 'life' },
  { quote : 'The best way to predict your future is to create it', source : 'Abraham Lincoln', tag : 'career' },
  { quote : 'The only way to do great work is to love what you do',source : 'Steve Job', year : 2010, tag : 'career' },
  { quote : 'Either you run the day or the day runs you', source : 'Jim Rohn', tag : 'life' },
  { quote : 'The best way to find yourself is to lose yourself in the service of others', source : 'Mahatma Gandhi', tag : 'life' }
];

//Create getRandomQuote function
function getRandomQuote(){
  var position = Math.floor(Math.random() * quoteList.length) + 1;//Select a random position in the list of quote
  return quoteList[position];
};
//Create printQuote function
function printQuote(){
  var quoteObject = getRandomQuote(); //store return object from getRandomQuote function
  var html = ''; //prepare html string for each properties
  html += '<p class="quote">'+quoteObject.quote+'</p>';
  html += '<p class="source">'+quoteObject.source+'</p>';
  html += '<span class="citation">'+quoteObject.citation+'</span>';
  html += '<span class="year">'+quoteObject.year+'</span>';
  document.getElementById('quote-box').innerHTML = html; //apply the string to the index page
};

//check if the new random position is in new list of position or not
//newList.indexOf(position)
