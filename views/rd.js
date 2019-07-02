//joke
const newJokeButton = document.querySelector('.new-joke');
newJokeButton.addEventListener('click', getJoke);
const previousButton = document.querySelector('.previous');
previousButton.addEventListener('click', getPrevious);
var arr = new Array();
var i = 0;
function getJoke(){
	// fetch('https://api.chucknorris.io/jokes/random')
	// 	.then(function (response){
	// 	  	return response.json();
 //  		}).then(function(data){
 //  			display(data.value, '.text1');
 //  			arr.push(data.value);
 //  			i = arr.length - 1;
 //  		})
 	axios('https://api.chucknorris.io/jokes/random')
 	.then(function(response){
 		display(response.data.value, '.text');
 		arr.push(response.data.value);
 		i = arr.length - 1;
 	})
}

function display(data, classname){
	const output = document.querySelector(classname);
	output.textContent= data;
	//share tren tweet
	const tweetButton = document.querySelector('.tweet');
	tweetButton.setAttribute('href', `https://twitter.com/share?text=${data}`);
}
function getPrevious(){
	i--;
	display(arr[i], '.text');
}
