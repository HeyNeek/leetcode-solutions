/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let ansStr = [];
    
    const greater = Math.max(word1.length, word2.length);
    
    for(let i = 0; i < greater; i++){
        ansStr.push(word1[i]);
        ansStr.push(word2[i]);
    }
    
    return ansStr.join("");
};