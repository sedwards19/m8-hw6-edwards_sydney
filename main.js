var button = document.getElementsByTagName('button')[0];

var yourFortune = document.querySelector('fortune-wrapper p span');
//fortuneWrapper.appendChild(yourFortune);

var fortuneTextPlaceholder = document.createTextNode('');
yourFortune.appendChild(fortuneTextPlaceholder);

//Create Random List
var magicFortunes = ['It is certain.','It is decidedly so.', 'Without a doubt.', 'Yes - definitely.', 'You may rely on it.', 'As I see it, yes.', 'Most likely.', 'Outlook good.', 'Yes.', 'Signs point to yes.', 'Reply hazy, try again', 'Ask again later.', 'Better not tell you now.', 'Cannot predict now.', 'Concentrate and ask again.', 'Dont count on it.', 'My reply is no.', 'My sources say no.', 'Outlook not so good.', 'Very doubtful.'];

//Make the function
var shakeBall = function() {

	magicFortunes.sort(function(a, b){return 0.5 - Math.random()});

	//Print the first list item to yourFortune variable
	var fortuneText = document.createTextNode(magicFortunes[0]);
	yourFortune.appendChild(fortuneText);

	//Hide generator button
	var ourButtonSection = document.getElementById('generator-button');
	ourButtonSection.removeChild(button);

};

//Event Handler Property
button.onclick = shakeBall;
