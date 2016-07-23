//function to change variables for quotes and colors
function findQuote(){
  var quotes = [
  ["Somewhere, something incredible is waiting to be known.", "Carl Sagan"],
  ["When you make the finding yourself - even if you're the last person on Earth to see the light - you'll never forget it.", "Carl Sagan"],
  ["Friendship ... is born at the moment when one man says to another \"What! You too? I thought that no one but myself . . .\"", "C.S. Lewis"],
  ["No one can make you feel inferior without your consent.", "Eleanor Roosevelt"],
  ["If you tell the truth, you don't have to remember anything.", "Mark Twain"],
  ["The future rewards those who press on. I don't have time to feel sorry for myself. I don't have time to complain. I'm going to press on.", "Barack Obama"],
  ["Change will not come if we wait for some other person or some other time. We are the ones we've been waiting for. We are the change that we seek.", "Barack Obama"],
  ["Try to be a rainbow in someone's cloud.", "Maya Angelou"],
  ["When someone shows you who they are, believe them the first time.", "Maya Angelou"],
  ["A man who stands for nothing will fall for anything.", "Malcolm X"],
  ["You gain strength, courage, and confidence by every experience in which you really stop to look fear in the face. You are able to say to yourself, \"I lived through this horror. I can take the next thing that comes along.\"", "Eleanor Roosevelt"],
  ["I didn’t want to just know names of things. I remember really wanting to know how it all worked.", "Elizabeth Blackburn"],
  ["We must have perseverance and above all confidence in ourselves. We must believe that we are gifted for something and that this thing must be attained.", "Marie Curie"],
  ["Courage is like — it’s a habitus, a habit, a virtue: you get it by courageous acts. It’s like you learn to swim by swimming. You learn courage by couraging.", "Marie M. Daly"],
  ["A ship in port is safe, but that’s not what ships are built for.", "Grace Hopper"],
  ["All sorts of things can happen when you’re open to new ideas and playing around with things.", "Stephanie Kwolek"],
  ["Hope and curiosity about the future seemed better to me than guarantees.", "Hedy Lamarr"],
  ["The only phrase I've ever disliked is, \"Why, we've always done it that way.\" I always tell young people, \"Go ahead and do it. You can always apologize later.\"", "Grace Hopper"],
  ["If it isn't bolted down, bring it home.", "Grace Hopper"]
  ];
  var colors = ["#FB6964", "#93DFA4", "#A8ACDF", "#9ECA83", "#E1A36F", "#236674", "#7C609B", "#CFB53B", "#73A857", "#801515", "#9974AA", "#8AA1D4"];

  var colorIndex = Math.floor(Math.random() * colors.length);
  var index = Math.floor(Math.random() * quotes.length);

  var quotely = {
    quote: quotes[index][0],
    attr: quotes[index][1],
    colorpick: colors[colorIndex]
  };
  return quotely;
}

//random color function
function randomizeColor(obj){
  $(".color-bg").css("background-color", obj.colorpick);
  $(".btn").css("background-color", obj.colorpick);
  $(".white-bg").css("color", obj.colorpick);
  $("body").css("background-color", obj.colorpick);
};

function formatQuotes(quoteObj){
  quoteObj.quoteFormat = "\t" + quoteObj.quote + "<br><div class='text-right small'>" + "- " + quoteObj.attr;
  quoteObj.tweetQuote = quoteObj.quote + " -" + quoteObj.attr;
  quoteObj.tweetBtn = $("#tweet-container a").addClass("twitter-share-button").attr("href", "http://twitter.com/share").attr("data-url", "#").attr("data-text", quoteObj.tweetQuote);
}

//tweet refresh function
function refresher(ev) {
    ev.preventDefault();
    // Remove existing iframe
    $('#tweet-container').remove();
    // Generate new markup
    $('#tweet-container').append(quotely.tweetBtn);
    twttr.widgets.load();
};

function quoteIt(obj){
  $("#quote").html(obj.quoteFormat);
}

function removeLastButton(){
  $("#twtbox").empty();
}

function tweetIt(obj){
    function createButton(obj) {

        // Create a New Tweet Element
        msg  =  obj.tweetQuote;
        var link = document.createElement('a');
        link.setAttribute('href', 'https://twitter.com/share');
        link.setAttribute('class', 'twitter-share-button');
        link.setAttribute('style', 'margin-top:5px;');
        link.setAttribute('id', 'twitterbutton');
        link.setAttribute("data-text", "" + msg + "");
        link.setAttribute("data-via", "remacagy");
        link.setAttribute("data-size", "large");

       // Put it inside the twtbox div
        tweetdiv  =  document.getElementById('twtbox');
        tweetdiv.appendChild(link);

        twttr.widgets.load(); //very important
    }
    createButton(obj);
}

$(document).ready(function(){
  quotely = findQuote();
  randomizeColor(quotely);
  formatQuotes(quotely);
  quoteIt(quotely);
  tweetIt(quotely);
});

$("#new-quote").on("click", function(){
  quotely = findQuote();
  randomizeColor(quotely);
  formatQuotes(quotely);
  removeLastButton();
  quoteIt(quotely);
  tweetIt(quotely);
});

