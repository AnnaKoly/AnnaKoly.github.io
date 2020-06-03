var content = document.getElementById("content")

for (var i = 1; i <= 10; i++) {
    var newRow = document.createElement("div");
    

    newRow.setAttribute("class", "row");
    for (var j = 1; j <= 10; j++) {
        var newCell = document.createElement("div");
        newCell.setAttribute("class", "cell");
        newRow.appendChild(newCell);
        if (i % 2 == j % 2) {
            newCell.setAttribute("class", "white cell")
        } else {
            newCell.setAttribute("class", "black cell")
            //var arrLetters = ['A', 'B', 'C', 'D', 'E', 'H', 'G', 'H', 'I', 'J']
        }
            
    }

    content.appendChild(newRow);
}