/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    let differenceArr = [];
    
    arr.sort((a,b) => a-b);
    
    for(let i = arr.length - 1; i > 0; i--){
        differenceArr.push(arr[i] - arr[i - 1]);
    }
    
    const min = Math.min(...differenceArr);
    let ansArr = [];
    
    for(let i = arr.length - 1; i > 0; i--){
        if(arr[i] - arr[i - 1] === min){
            ansArr.push([arr[i - 1], arr[i]]);
        }
    }
    
    return ansArr.sort((a,b) => a[0] - b[0]);
};