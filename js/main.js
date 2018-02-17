
// Create Object to hold game grid cell data (row, column & image)
function GridCell(cellRow, cellCol, cellImage) {
	this.cellRow = cellRow,
	this.cellCol = cellCol,
	this.cellImage = cellImage,

	this.info = function() {
		return "Row(" +
		this.cellRow + "), Col(" + this.cellCol +
		"), Image(" + this.cellImage + ").";
	}
}


// Define getters and setters
Object.__defineGetter__.call(GridCell.prototype, "getGridCellData", 
	function() {
		return "Row : " + this.cellRow + " Col : " + this.cellCol
		+ " Image : " + this.cellImage;
	});

Object.__defineSetter__.call(GridCell.prototype, "setGridCellData",
	function(gcData) {
		var parts = gcData.toString().split(", ");
		this.cellRow = parts[0] || "";
		this.cellCol = parts[1] || "";
		this.cellImage = parts[2] || "";
	});


// Number of images to display in game grid
var totNumImages = 24;



// Select all LI elements in all game grid rows
var listItems = document.getElementById("gr1").getElementsByTagName("li");

// Loop through LI collection adding backgroundImage source
for (i = 0; i < listItems.length; i++) {
	listItems[i].style.backgroundImage = "url(../img/" + i.toString() + ".svg";
	listItems[i].style.backgroundRepeat = "no-repeat";
	listItems[i].style.backgroundPosition = "center center";
	listItems[i].addEventListener("click", swapImage)
}


function swapImage() {
	if (this.style.backgroundImage == "url(../img/999.svg)") {
		// check if li id is double digit - e.g., 11,12,13..
		if (this.id.length < 4) {
			this.style.backgroundImage = "url(../img/" + (this.id.charAt(2)-1) + ".svg)";
		// if li id is single digit - e.g., 1,2,3..
		} else {
			this.style.backgroundImage = "url(../img/" + (this.id.charAt(3)-1) + ".svg)";
		}
	} else {
		this.style.backgroundImage = "url(../img/999.svg)";
	}
}
