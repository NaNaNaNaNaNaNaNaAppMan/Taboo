var word;//array postion associated with word selected
var dont1;//first taboo word NOT TO BE SAID
var dont2;//second taboo word NOT TO BE SAID
var dont3;//third taboo word NOT TO BE SAID
var dont4;//fourth taboo word NOT TO BE SAID
var numWords;//number of words left in array
var wordsUsed = [];//words used from words array
var wordSelected;

function randWord(){
	wordSelected = Math.floor(Math.random()*numWords);
	}

function newWord(){
    $.getJSON('taboo_words.json', function(words) {
	numWords = words.words.length;
	randWord();
	while(wordsUsed.indexOf(wordSelected) != -1){
		randWord();
		}//exits loop when a word that hasn't been used is chosen randomly	
	
	word = words.words[wordSelected].word;
	dont1 = words.words[wordSelected].dont1;
	dont2 = words.words[wordSelected].dont2;
	dont3 = words.words[wordSelected].dont3;
	dont4 = words.words[wordSelected].dont4;
	
	document.getElementById('outputword').innerHTML = word;
	
	document.getElementById('output1').innerHTML = dont1;
	
	document.getElementById('output2').innerHTML = dont2;
	
	document.getElementById('output3').innerHTML = dont3;
	
	document.getElementById('output4').innerHTML = dont4;
	
	wordsUsed.push(wordSelected);//remove word from array to avoid multiple uses

if(wordsUsed.length == words.words.length){
	alert("All words have been used, all " + words.words.length + " of them")
	}
		})//getJSON
	}//end of newWord function
	


$(document).ready(function() {
	newWord();
	
});//document ready

