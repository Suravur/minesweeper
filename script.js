
    var height = 16;
    var width = 30;
    grid = new Array(height * width);
    
    generateGrid();

    shuffleArray(grid);

    var gridMatrix = listToMatrix(grid, width) ;

    gridMatrix = orientMatrix(gridMatrix, height, width);
    
    grid = [].concat.apply([], gridMatrix);

    // (B) CREATE HTML TABLE STRING
    var perrow = width, html = "<table><tr>";

    // LOOP THROUGH ARRAY AND ADD TABLE CELLS
    for (var i = 0; i < grid.length; i++) {
        // "NORMAL" CELL
        switch (grid[i]) {
            case -1:
                html += `<td style="color:black" id=${i}>•</td>`;
                break;
            case 0:
                html += `<td style="color:white" id=${i}>&nbsp</td>`;
                break;
            case 1:
                html += `<td style="color:blue" id=${i}>${grid[i]}</td>`;
                break;
            case 2:
                html += `<td style="color:green" id=${i}>${grid[i]}</td>`;
                break;
            case 3:
                html += `<td style="color:red" id=${i}>${grid[i]}</td>`;
                break;
            case 4:
                html += `<td style="color:darkblue" id=${i}>${grid[i]}</td>`;
                break;
            case 5:
                html += `<td style="color:maroon" id=${i}>${grid[i]}</td>`;
                break;
            case 6:
                html += `<td style="color:darkcyan" id=${i}>${grid[i]}</td>`;
                break;
            case 7:
                html += `<td style="color:black" id=${i}>${grid[i]}</td>`;
                break;
            case 8:
                html += `<td style="color:darkgray" id=${i}>${grid[i]}</td>`;
                break;
            default:
                html += `<td style="background-color:red">error</td>`;
        }

        // CLICK ON CELL TO DO SOMETHING 
        // html += `<td onclick="FUNCTION()">${data[i]}</td>`;
  
        // TO PASS IN A RUNNING NUMBER OR PARAMETER
        // html += `<td onclick="FUNCTION(${i})">${data[i]}</td>`;
 
        // BREAK INTO NEXT ROW
        var next = i+1;
        if (next%perrow==0 && next!=grid.length) {
            html += "</tr><tr>";
        }
    }
    html += "</tr></table>";

    // (C) ATTACH HTML TO CONTAINER
        document.getElementById("container").innerHTML = html;
    
    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
}

function generateGrid() {
    grid.fill(0);
    grid.fill(-1, 0, 98);
}

function orientMatrix(gridMatrix, height, width) {
    for (var row = 0; row < height; row++) {
        for (var column = 0; column < width; column++) {
            if (gridMatrix[row][column] == -1) {
                //+1 left
                if (column != 0 && gridMatrix[row][column - 1] != -1) {
                    gridMatrix[row][column - 1] += 1;
                }
                //+1 right
                if (column != width-1 && gridMatrix[row][column + 1] != -1) {
                    gridMatrix[row][column + 1] += 1;
                }
                //+1 up
                if (row != 0 && gridMatrix[row - 1][column] != -1) {
                    gridMatrix[row - 1][column] += 1;
                }
                //+1 down
                if (row != height-1 && gridMatrix[row + 1][column] != -1) {
                    gridMatrix[row + 1][column] += 1;
                }
                //+1 down left
                if (column != 0 && row != height-1 && gridMatrix[row + 1][column - 1] != -1) {
                    gridMatrix[row + 1][column - 1] += 1;
                }
                //+1 down right
                if (column != width-1 && row != height-1 && gridMatrix[row + 1][column + 1] != -1) {
                    gridMatrix[row + 1][column + 1] += 1;
                }
                //+1 up left
                if (column != 0 && row != 0 && gridMatrix[row - 1][column - 1] != -1) {
                    gridMatrix[row - 1][column - 1] += 1;
                }
                //+1 up right
                if (row != 0 && column != width-1 && gridMatrix[row - 1][column + 1] != -1) {
                    gridMatrix[row - 1][column + 1] += 1;
                }
            }
        }
    }
    return gridMatrix;
}

function listToMatrix(list, elementsPerSubArray) {
    var matrix = [], i, k;

    for (i = 0, k = -1; i < list.length; i++) {
        if (i % elementsPerSubArray === 0) {
            k++;
            matrix[k] = [];
        }

        matrix[k].push(list[i]);
    }

    return matrix;
}


