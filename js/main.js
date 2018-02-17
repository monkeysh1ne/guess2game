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


var testGridCellEntry = new GridCell();

testGridCellEntry.setGridCellData = "1, 1, /img/0.svg";

document.write("GridCell data : " + testGridCellEntry.getGridCellData + "<br />");

var anotherGridCell = new GridCell();

anotherGridCell.setGridCellData = "1, 2, /img/1.svg";

document.write("GridCell data : " + anotherGridCell.getGridCellData + "<br />");
