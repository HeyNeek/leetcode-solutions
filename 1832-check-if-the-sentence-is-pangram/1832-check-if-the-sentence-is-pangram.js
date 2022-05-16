/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    let charMap = {};
    
    for(let i = 0; i < sentence.length; i++){
        charMap[sentence[i]] ? charMap[sentence[i]]++ : charMap[sentence[i]] = 1;
    }
    
    const numOfKeys = Object.keys(charMap).length;
    
    if(numOfKeys === 26){
        return true;
    }else{
        return false;
    }
    
};