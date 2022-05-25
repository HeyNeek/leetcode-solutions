/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function(s) {
    const alphabetNumMap = {
        "1": "a",
        "2": "b",
        "3": "c",
        "4": "d",
        "5": "e",
        "6": "f",
        "7": "g",
        "8": "h",
        "9": "i",
        "10#": "j",
        "11#": "k",
        "12#": "l",
        "13#": "m",
        "14#": "n",
        "15#": "o",
        "16#": "p",
        "17#": "q",
        "18#": "r",
        "19#": "s",
        "20#": "t",
        "21#": "u",
        "22#": "v",
        "23#": "w",
        "24#": "x",
        "25#": "y",
        "26#": "z"
    };
    
    const numArr = s.split("");
    
    let compareArr = [];
    
    for(let i = 0; i < numArr.length; i++){
        if(numArr[i + 2] === "#"){
            let num = numArr.slice(i, i + 3);
            compareArr.push(num.join(""));
            i += 2;
        }else{
            compareArr.push(numArr[i]);
        }
    }
    
    let ansArr = [];
    
    for(let i = 0; i < compareArr.length; i++){
        ansArr.push(alphabetNumMap[compareArr[i]]);
    }
    
    return ansArr.join("");
};