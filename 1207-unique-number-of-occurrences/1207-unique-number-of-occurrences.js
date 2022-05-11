/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let occurenceMap = {};
    
    for(let i = 0; i < arr.length; i++){
        occurenceMap[arr[i]] ? occurenceMap[arr[i]]++ : occurenceMap[arr[i]] = 1;
    }
    
    let comparisonArr = [];
    
    for(const property in occurenceMap){
        comparisonArr.push(occurenceMap[property]);
    }
    
    for(let i = 0; i < comparisonArr.length; i++){
        for(let j = i + 1; j < comparisonArr.length; j++){
            if(comparisonArr[i] === comparisonArr[j]){
                return false;
            }
        }
    }
    
    return true;
};