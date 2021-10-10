/************************************************
Treehouse Techdegree:
Project 4 - Random Quote Generator
*************************************************/

// For assistance: 
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community

/*** 
 * `quotes` array 
***/
//declare an array named quotes
let quotes = [
  {
    quote: 'Many of life’s failures are people who did not realize how close they were to success when they gave up.',
    source: 'Thomas A. Edison',
    citation: 'Parade',
    year: 2021
  },
  {
    quote: 'Never forget the three powerful resources you always have available to you: love, prayer, and forgiveness.',
    source: 'H. Jackson Brown, Jr.',
    citation: 'BrainyQuote',
    year: 2021

  },
  {
    quote: 'Always remember that you are absolutely unique. Just like everyone else. ',
    source: 'Margaret Mead',
    citation: 'Hobspot',
    year: 2021

  },
  {
    quote: 'If you do what you’ve always done, you’ll get what you’ve always gotten.',
    source: 'Tony Robbins',
    citation: 'Forboes',
    year: 2013

  },
  {
    quote: 'Be yourself; everyone else is already taken.',
    source: 'Oscar Wilde',
    citation: 'goodreads',
    year: 2021

  }
];

/***
 * `getRandomQuote` function 
***/

function getRandomQuote() {
  const randomNum= Math.floor(Math.random() * quotes.length);//genarate a randome number
  return quotes[randomNum]; //Return an item of quotes array.
}

/***
 * `printQuote` function
***/
function printQuote() {
  const printOnScreen = getRandomQuote();  //declare a variable printOnScreen and assign the returned quote from getRandomQuote function to it.
  let html = `<p class="quote">${printOnScreen.quote}</p>
  <p class="source">${printOnScreen.source}<span class="citation">${printOnScreen.citation}</span><span class="year">${printOnScreen.year}</span></p>`;
  return  document.getElementById('quote-box').innerHTML=html; // add the html element to the page.
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
document.getElementById('load-quote').addEventListener("click", printQuote, false);