/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function(text, brokenLetters) {
    let numOfWords = 0;
    const wordArr = text.split(" ");
    
    
    
    for(let i = 0; i < wordArr.length; i++){
        for(let j = 0; j <= wordArr[i].length; j++){
            if(brokenLetters.includes(wordArr[i][j])){
                break;
            }
            
            if(j === wordArr[i].length){
                numOfWords++;
            }
        }
    }
    
    return numOfWords;
};