/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
var countWords = function(words1, words2) {
    let charMap = {};
    let charMap2 = {};
    
    for(let i = 0; i < words1.length; i++){
        charMap[words1[i]] ? charMap[words1[i]]++ : charMap[words1[i]] = 1;
    }
    
    for(let i = 0; i < words2.length; i++){
        charMap2[words2[i]] ? charMap2[words2[i]]++ : charMap2[words2[i]] = 1;
    }
    
    let wordArr1 = [];
    let wordArr2 = [];
    
    for(const property in charMap){
        if(charMap[property] === 1 ){
            wordArr1.push(property);
        }
    }
    
    for(const property in charMap2){
        if(charMap2[property] === 1 ){
            wordArr2.push(property);
        }
    }
    
    wordArr1.sort();
    wordArr2.sort();
    
    let count = 0;
    
    for(let i = 0; i < wordArr1.length; i++){
        for(let j = 0; j < wordArr2.length; j++){
            if(wordArr1[i] === wordArr2[j]){
                count++;
            }
        }
    }
    
    return count;
};