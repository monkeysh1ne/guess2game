
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
	listItems[i].addEventListener("click", function() {
		this.classList.toggle('blankImg');
	});
}
