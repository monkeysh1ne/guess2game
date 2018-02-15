

// Create JS Object
// var object = {
// 	name: 'Darrell',
// 	address: {
// 		country: 'New Zealand'
// 	}
// };

// Access object data
// var myName = object.name;
// console.log(myName);

// Change object data
// var country = object.address.country = "Australia"
// console.log(country);


// Adding elements to the DOM
// var paragraph = document.createElement('P');
// paragraph.textContent = 'The DOM is the bomb!';
// document.body.appendChild(paragraph);



// Event Listeners
// Create element
// var div = document.createElement('DIV');

// Set height of element
// div.style.height = '100vh';

// Append element to the DOM
// document.body.appendChild(div);

// Add event listener to element
// div.addEventListener('mousemove', function(event) {
// 	console.log(event);
// 	var x = event.clientX;
// 	var y = event.clientY;
// 	div.textContent = x + ', ' + y;
// 	div.style.backgroundColor = 'rgb(' + x + ', ' + y + ', 100)';
// });


function fullScreen(element) {
	var newElement = document.createElement('DIV');
	newElement.style.height = '100vh';
	document.body.appendChild(newElement);	
	return newElement;
}


function input(inputType, DOMelement, callback) {
	DOMelement.addEventListener(inputType, function(event) {
		var x = event.clientX;
		var y = event.clientY;
		callback(DOMelement, x, y);
	});
}

function output(element, x, y) {
	element.textContent = x + ', ' + y;
	element.style.backgroundColor = 'rgb(' + x + ', ' + y + ', 100)';
}

input('mousemove', fullScreen('DIV'), output);