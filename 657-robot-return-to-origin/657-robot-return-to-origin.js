/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let positionXY = [0,0];
    
    for(let i = 0; i < moves.length; i++){
        if(moves[i] === "L"){
            positionXY[0] -= 1;
        }else if(moves[i] === "R"){
            positionXY[0] += 1;
        }else if(moves[i] === "U"){
            positionXY[1] += 1;
        }else if(moves[i] === "D"){
            positionXY[1] -= 1;
        }
    }
    
    if(positionXY[0] === 0 && positionXY[1] === 0){
        return true;
    }else{
        return false;
    }
};