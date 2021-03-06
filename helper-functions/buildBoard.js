
function buildBoard(data) {
  var board = [];
  var columnsLength = data.dimensions[0];
  var rowsLength = data.dimensions[1];
  var walls = data.walls;

  for (var i = 0; i < rowsLength; i++) {
    var row = [];
    for (var j = 0; j < columnsLength; j++) {
      row.push(0);
    }
    board.push(row)
  }

  for (var i = 0; i < walls.length; i++) {
    var x = walls[i][0];
    var y = (rowsLength - 1) - walls[i][1];
    board[y][x] = 1;
  }

  return board;
}

module.exports.buildBoard = buildBoard;