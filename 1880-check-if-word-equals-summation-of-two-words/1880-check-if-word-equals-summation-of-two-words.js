/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
var isSumEqual = function(firstWord, secondWord, targetWord) {
    const numMap = {
        "a": "0",
        "b": "1",
        "c": "2",
        "d": "3",
        "e": "4",
        "f": "5",
        "g": "6",
        "h": "7",
        "i": "8",
        "j": "9",
        "k": "10",
        "l": "11",
        "m": "12",
        "n": "13",
        "o": "14",
        "p": "15",
        "q": "16",
        "r": "17",
        "s": "18",
        "t": "19",
        "u": "20",
        "v": "21",
        "w": "22",
        "x": "23",
        "y": "24",
        "z": "25"
    };
    
    let firstArr = [];
    let secondArr = [];
    let targetArr = [];
    
    for(let i = 0; i < firstWord.length; i++){
        firstArr.push(numMap[firstWord[i]]);
    }
    
    for(let i = 0; i < secondWord.length; i++){
        secondArr.push(numMap[secondWord[i]]);
    }
    
    for(let i = 0; i < targetWord.length; i++){
        targetArr.push(numMap[targetWord[i]]);
    }
    
    const firstWordNum = parseInt(firstArr.join(""));
    const secondWordNum = parseInt(secondArr.join(""));
    const sum = firstWordNum + secondWordNum;
    const targetWordNum = parseInt(targetArr.join(""));
    
    if(sum === targetWordNum){
        return true;
    }else{
        return false;
    }
    
};