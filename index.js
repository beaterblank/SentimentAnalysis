var sentiment = require("natural").SentimentAnalyzer;
var stemmer = require("natural").PorterStemmer;
var analyser = new sentiment("English", stemmer, "afinn")

function GetSentiment(str) {
    str_arr = str.split(" ")
    return analyser.getSentiment(str_arr)
}

console.log(GetSentiment("I really hate u"))