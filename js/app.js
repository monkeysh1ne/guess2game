// Array of divs in which to display pics to be compared
// Grid currently fixed at 6 cols by 4 rows.
// ToDo: Code for any number of rows and cols at user input.


// Array of key:value pairs for images to display in grid.

var imageBank = [];

// Array of game grid cells.
var gameGridCells = document.getElementsByClassName("gridCell");

// Base path for images used in grid
var imageBasePath = "/img/";


// Set total number of images to load into grid
var totImgs = 12;



// Populate imageBank with images numbered from 0 to n.
function loadAllImages() {
	for (i = 0; i < totImgs; i++) {
		addToImageBank(i, imageBasePath + i.toString() + ".svg")
	}
}


// Populate imageBank with images
// for now restrict number of images to
// half of number of cells (remember each image is displayed twice)
function addToImageBank(imageNum, imgFile){
	imageBank.push({
		imageNum: imageNum,
		imageFileName: imgFile,
	});
}

// Set the display image default to showing the game grid cell's image
function displayImage(displayImageFlag){
	imageBank.push({
		displayImageFlag: true
	});
}


// Add event listener to game grid cells (by class name)
function addEventListeners() {
	for (var i = 0; i < gameGridCells.length; i++) {
		gameGridCells[i].addEventListener('click', clickAction);
	}
}


// Either display of hide image in game grid cell.
function clickAction() {
	// set imageBank object to equal current game grid
	// cell id number (stripped of preceeding "gc")
	console.log()

	// Is the image displaying?

}




// Set all images in grid to invisible
// NB: Since changing cell style.visibility to "hidden"
// hides cell borders also.  Hack hides image by swpping
// for a blank svg (ie., it contains nothing).
function hideImages() {
	for (i = 1; i <= totImgs; i++) {
		var thisCell = document.getElementById("gc" + i.toString());
		thisCell.style.backgroundImage = "url(/img/999.svg)";
	}
}




// Display all images in the grid
function displayAllImages() {
	for (currCell = 1; currCell <= totImgs; currCell++) {
		var thisCell = document.getElementById("gc" + currCell.toString());
		thisCell.style.background = "url(" + imageBank[currCell-1].imageFileName + ") no-repeat center center";
	}
}




// Set event listener for all game grid cells
// to watch for 'click' event.





// Maintain and update score and score display.





loadAllImages();
addEventListeners();
// hideImages();
displayAllImages();
