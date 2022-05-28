/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function(s) {
    let threeCharStrs = [];
    
    for(let i = 0; i < s.length; i++){
        if(s[i + 2]){
            threeCharStrs.push(s[i] + s[i + 1] + s[i + 2]);
        }
    }
    
    let distinctSubstrs = [];
    
    for(let i = 0; i < threeCharStrs.length; i++){
        for(let j = 0; j < threeCharStrs[i].length; j++){
            const str = threeCharStrs[i].split("").sort().join("");
            if(str[j] === str[j + 1]){
                break;
            }
            
            if(j === str.length - 1){
                distinctSubstrs.push(str);
            }
        }
    }
    
    return distinctSubstrs.length;
};