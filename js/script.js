/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/
let message = '';



// This array of objects contain the quotes 

let quotes = [
    {
        qoute: 'There is only one way to avoid criticism: do nothing, say nothing, and be nothing.',
        source: 'Aristotle',
        tag: 'Motivational'
    },
    {
        qoute: 'Life is the art of drawing without an eraser.',
        source: 'John W. Gardner',
        citation: 'Twitter',
        year: 1985,
        tag: 'Experience'
        
    },
    {
        qoute: 'There is only one corner of the universe you can be certain of improving, and that\'s your own self.',
        source: 'Aldous Huxley',
        citation: 'Brainy Qoute',
        year: 1992,
        tag: 'Inspiration'
    },
    {
        qoute: 'Only those who will risk going too far can possibly find out how far one can go.',
        source: 'T. S. Eliot',
        tag: 'Life lesson'
        
    },
    {
        qoute: 'Behind every great man is a woman rolling her eyes.',
        source: 'Jim Carrey',
        tag: 'Funny'
    }

]


/* This function will generate random numbers between 1 and 5, and use the random swquece to pull one quote from the quotes array at a time whenever the page is refreshed.
*/
function getRandomQuote( ) {
        let random_quote = quotes[Math.floor(Math.random() * quotes.length)];
        return random_quote;
}


 
// This function will print the random quotes on the page evetytime the page is refreshed

function printQuote() {
    let html = document.getElementById('quote-box');
    html.innerHTML = message; 
    
    let random = getRandomQuote();
    message = '<p class="quote">' + random.qoute + '</p>';
    message += '<p class="source">' + random.source ;
        
        if(random.citation){
    message += '<span class="citation">' + ', ' + random.citation + ', ' + '</span>';
        } 
        if (random.year) {
    message += '<span class="year">' + random.year + '</span>';
        }
    message +=  '</p>';
    message += '<p class="tags">' + 'Tag: ' +  random.tag + '</p>';
    
    return message;
}
    
    let random = getRandomQuote();
    message = '<p class="quote">' + random.qoute + '</p>';
    message += '<p class="source">' + random.source ;
        
        if(random.citation){
    message += '<span class="citation">' + ', ' + random.citation + ', ' + '</span>';
        } 
        if (random.year) {
    message += '<span class="year">' + random.year + '</span>';
        }
    message +=  '</p>';
    message += '<p class="tags">' + 'Tag: ' +  random.tag + '</p>';

printQuote();



// This function will change the backroung color eveytime the page is refreshed or 'show another quote' buttom is clicked
function backgroundColor() {
    var color;
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
        Color = "rgb("; 
        Color += x + ",";
        Color += y + ",";
        Color += z;
        Color += ")";
    document.body.style.background = Color;
    }
backgroundColor();



// This will apply time interval between qoutes
var intervalID = window.setInterval(printQuote, 5000);
var intervalID = window.setInterval(backgroundColor, 5000);



/* Whenever the show another quote is clicked the event listner will call the printQuote to chnaged the coat and backgroundColor to randomly chage the background color 
*/
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
document.getElementById('loadQuote').addEventListener("click", backgroundColor, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.
