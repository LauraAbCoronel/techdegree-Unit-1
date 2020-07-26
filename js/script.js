/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array contains a list of quotes and their metadata.
 * All A Song of Ice and Fire quotes
***/
const quotes = [
  {
    quote: 'I have been called many things, but giant is seldom one of them.',
    source: 'Tyrion Lannister',
    citation: 'A Game of Thrones',
    year: '1996',
    tag: ['humor', 'book'],
  },
  {
    quote: "I'm short, not blind.",
    source: 'Tyrion Lannister',
    citation: 'A Clash of Kings',
    year: '1998',
  },
  {
    quote: 'I have a tender spot in my heart for cripples and bastards and broken things.',
    source: 'Tyrion Lannister',
    citation: 'A Game of Thrones',
    year: '1996',
  },
  {
    quote: 'The gods must have been drunk when they got to me.',
    source: 'Tyrion Lannister',
    citation: 'A Dance with Dragons',
    year: '2011',
  },
  {
    quote: 'My mind is my weapon. My brother has his sword, King Robert has his warhammer, and I have my mind...and a mind needs books as a sword needs a whetstone if it is to keep its edge.',
    source: 'Tyrion Lannister',
    citation: 'A Game of Thrones',
    year: '1996',
  },
  {
    quote: "Let them see that their words can cut you, and you'll never be free of the mockery. If they want to give you a name, take it, make it your own. Then they can't hurt you with it anymore.",
    source: 'Tyrion Lannister',
    citation: 'A Game of Thrones',
    year: '1996',
  },
  {
    quote: "Why is it that when one man builds a wall, the next man immediately needs to know what's on the other side?",
    source: 'Tyrion Lannister',
    citation: 'A Game of Thrones',
    year: '1996',
  },
  {
    quote: "He's going to be as useful as nipples on a breastplate.",
    source: 'Tyrion Lannister',
    citation: 'A Dance with Dragons',
    year: '2011',
  }
];

// 'getRandomNumber' function takes in the maximum number the random number can be
// return: a random number between 0 and highNumber
function getRandomNumber(highNumber) {
  randomNumber = Math.floor(Math.random() * highNumber + 1);
  return randomNumber
}

/***
 * `getRandomQuote` function uses the getRandomNumber function to randomly select an index in the quote array
 * return: a random quote in the quotes array.
***/
function getRandomQuote(quoteArray) {
  randomIndex = getRandomNumber(quoteArray.length - 1);
  return quoteArray[randomIndex]
}


/***
 * `printQuote` function calles the getRandomQuote function to create an html string with all of the objects properties.
 * return: changes the text in the quote-box in the html source code.
***/
function printQuote() {
  quote = getRandomQuote(quotes);
  let html = `
    <p class="quote"> ${quote.quote} </p>
    <p class="source"> ${quote.source}
  `;
  if (quote.citation !== undefined) {
    html += `<span class="citation"> ${quote.citation} </span>`;
  }
  if (quote.year !== undefined) {
    html += `<span class="year"> ${quote.year} </span>`;
  }
  if(quote.tag !== undefined) {
    html += `<span class="tag"> ${quote.tag.join(', ')} </span>`;
  }
  html += '</p>';

  //Calls the getRandomNumber function to get random red green blue values
  const red = getRandomNumber(255);
  const green = getRandomNumber(255);
  const blue = getRandomNumber(255);
  
  // Changes the background color of the webpage
  document.body.style.backgroundColor = `rgb(${red}, ${blue}, ${green})`;

  return document.getElementById('quote-box').innerHTML = html;
}

//for every 10 seconds a new quote will appear on the cite
var intervalID = window.setInterval(printQuote,10000);



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);