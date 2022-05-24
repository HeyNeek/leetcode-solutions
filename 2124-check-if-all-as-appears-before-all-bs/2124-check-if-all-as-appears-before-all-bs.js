/**
 * @param {string} s
 * @return {boolean}
 */
var checkString = function(s) {
    if(!s.includes("a")){
        return true;
    }
    
    for(let i = 1; i < s.length; i++){
        if(s[i] === "a"){
            for(let j = i; j >= 0; j--){
                if(s[j] === "b"){
                    return false;
                }
            }
        }
    }
    
    return true;
};