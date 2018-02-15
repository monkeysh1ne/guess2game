// var mack = [];
// mack.push("Introducing");
// mack.push("Mack");
// mack.push("the", "knife");
// console.log(mack);
// console.log(mack.join(" "));
// console.log(mack.pop());
// console.log(mack);



// Were Squirrell stuff...

// var journal = [];

// function addEntry(events, didITurnIntoASquirrel){
// 	journal.push({
// 		events: events,
// 		squirrel: didITurnIntoASquirrel
// 	});
// }


// addEntry(["work", "touched tree", "pizza", "running", "television"], false);
// addEntry(["work", "ice cream", "cauliflower", "lasagna", "touched tree", "brushed teeth"], false);
// addEntry(["weekend", "cycling", "break", "peanuts", "beer"], false);


// // Phji is used to represent a measure of correlation
// function phi ( table ) {
// return ( table [3] * table [0] - table [2] * table [1]) /
// Math . sqrt (( table [2] + table [3]) *
// ( table [0] + table [1]) *
// ( table [1] + table [3]) *
// ( table [0] + table [2]) );
// }



var todoList = [];

function rememberTo(task) {
	todoList.push(task);
}

function whatIsNext() {
	return todoList.shift();
}

function urgentlyRememberTo(task) {
	todoList.unshift(task);
}



rememberTo("brush teeth");
rememberTo("eat breakfast");
rememberTo("go to work");

console.log(whatIsNext());
console.log(todoList);
console.log(whatIsNext());
console.log(todoList);