/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let wordArr = s.split(" ");
    let ansArr = [];
    
    for(let i = 0; i < wordArr.length; i++){
        let wordReversed = wordArr[i].split("").reverse().join("");
        ansArr.push(wordReversed);
    }
    
    return ansArr.join(" ");
    
};