/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function(s) {
    let charCountMap = {};
    
    for(let i = 0; i < s.length; i++){
        charCountMap[s[i]] ? charCountMap[s[i]]++ : charCountMap[s[i]] = 1;
    }
    
    let numArr = [];
    
    for(const property in charCountMap){
        numArr.push(charCountMap[property]);
    }
    
    console.log(numArr);
    
    for(let i = 0; i < numArr.length - 1; i++){
        if(numArr[i] !== numArr[i + 1]){
            return false;
        }
    }
    
    return true;
};