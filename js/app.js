// Array of divs in which to display pics to be compared
// Grid currently fixed at 6 cols by 4 rows.
// ToDo: Code for any number of rows and cols at user input.


// Array of key:value pairs for images to display in grid.

var imageBank = [];


// Base path for images used in grid
var imageBasePath = "/img/";


// Set total number of images to load into grid
var totImgs = 12;


// Populate imageBank with images
// for now restrict number of images to
// half of number of cells (remember each image is displayed twice)

function addToImageBank(imageNum, imgFile){
	imageBank.push({
		imageNum: imageNum,
		imageFileName: imgFile,
	});
}


// Add event listener to check grid cell once clicked on
// and see what imageVisible state it has - and change it
// (ie., if currently clickedStatus = 'false' then
// clickStatus becomes 'true' and vice-versa)
function checkVisibleState(element) {
	if (element.style.visibility = "hidden") {
		element.style.visibility = "visible";
	} else {
		element.style.visibility = "hidden";
	}
}


// Set all images in grid to invisible
// NB: Since changing cell style.visibility to "hidden"
// hides cell borders also.  Hack hides image by swpping
// for a blank svg (ie., it contains nothing).
function hideImages() {
	for (i = 1; i <= totImgs; i++) {
		var thisCell = document.getElementById("gc" + i.toString());
		thisCell.style.background = "url(/img/999.svg) no-repeat center center";
	}
}



// Populate imageBank with images numbered from 0 to n.
function loadAllImages() {
	for (i = 0; i < totImgs; i++) {
		addToImageBank(i, imageBasePath + i.toString() + ".svg")
	}
}


console.log(imageBank);

// Display all images in the grid
function displayAllImages() {
	for (currCell = 1; currCell <= totImgs; currCell++) {
		var thisCell = document.getElementById("gc" + currCell.toString());
		thisCell.style.background = "url(" + imageBank[currCell-1].imageFileName + ") no-repeat center center";
	}
}
loadAllImages();
displayAllImages();
// hideImages();