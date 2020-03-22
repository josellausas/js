// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// QUESTION: In example one, why is 9 -> 1 -> 1-> 9 not the best answer?



function getLargestPos(Board){
    let nRows = Board.length;
    let nCols = Board[0].length;
    
    let largest = 0;
    let found = [];
    
    for(let y = 0; y < nRows; y++){
        for(let x = 0; x < nCols; x++ ){
            if(Board[y][x] > largest){
                found = [[y,x]];
                largest = Board[y][x]
            } else {
                if(Board[y][x] === largest){
                    found.push([y,x]);
                }
            }
        }
    }
    return found;
}

function getLargestNeighbour(pos, Board, skipList){
    // Returns the position of the largest value neighbours
    let topLeft, top, topRight;
    let left, right;
    let botLeft, bot, botRight;
    let y = pos[0];
    let x = pos[1];
    let largestFound = -1;
    let largest = [];
    
    topLeft = [y-1, x-1];
    top = [y-1, x];
    topRight = [y-1, x+1];
    left = [y, x-1];
    right = [y, x+1];
    botLeft = [y+1, x-1];
    bot = [y+1, x];
    botRight = [y+1, x-1];
    
    let posArr = [
        topLeft,
        top,
        topRight,
        left,
        right,
        botLeft,
        bot,
        botRight
    ];
    
    posArr.forEach(pos => {
        if(pos in skipList === true){
            console.log("This number already in path"); 
        } else {
            if(Board[pos[0]][pos[1]]){
                let n = Board[pos[0]][pos[1]];
                if(n > largestFound){
                    largest = [pos];
                    largestFound = n;
                } else {
                    if(n === largestFound){
                        largest.push(pos);
                    }   
                }
            }   
        }
        
    })
    
    if(largest.length > 1){
        // Return whichever has the best neighbours
        let best = -1;
        let bestPos;
        skipList.push(pos)
        largest.forEach( candidate => {
            let pos = getLargestNeighbour(candidate, Board, skiplist);
            let value = Board[pos[0]][pos[1]];
            if(value > best){
                bestPos = pos;
                best = value;
            }
        })
        return bestPos;
    } else {
        return largest[0];
    }
}

function getBestPath(pos, Board, path){
    let number = Board[pos[0]][pos[1]];
    
    console.log(number);
    let value = `${number}`;
    let posChain = [pos];
    
    // Get the next largest neighbour
    while(value.length < 4){
        let largestNeighborPos = getLargestNeighbour(pos, Board, posChain);
        posChain.push(largestNeighborPos);
        value.concat(Board[largestNeighborPos[0]][largestNeighborPos[1]]);
    }
    return value;
}


function solution(Board) {
    // write your code in JavaScript (Node.js 8.9.4)
    // Find the positions of the largest number in the map
    const maxPositions = getLargestPos(Board);
    console.log(maxPositions);
    let bestValue = "0000";
    maxPositions.forEach( candidate => {
        console.log(candidate);
        // Evaluate the value of the concatenated path
        let value = getBestPath(candidate, Board, "");
        if(parseInt(value) > bestValue){
            bestValue = vaue;
        }
    });
    return bestValue;
}
