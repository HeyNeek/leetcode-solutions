/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    const wordArr = s.split(" ");
    
    wordArr.sort((a,b)=> a[a.length - 1] - b[b.length - 1]);
    
    let ansArr = [];
    
    for(let i = 0; i < wordArr.length; i++){
        let charArr = wordArr[i].split("");
        charArr.pop();
        ansArr.push(charArr.join(""));
    }
    
    return ansArr.join(" ");
};