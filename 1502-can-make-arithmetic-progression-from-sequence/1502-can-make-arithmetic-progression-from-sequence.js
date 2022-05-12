/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
    arr.sort((a,b)=>a-b);
    const diff = arr[arr.length - 1] - arr[arr.length - 2];
    
    for(let i = arr.length - 1; i > 0 ; i--){
        if(arr[i] - diff !== arr[i - 1]){
            return false;
        }
    }
    
    return true;
};