/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let ansArr = [];
    
    for(let i = 0; i < nums.length; i++){
        ansArr.push(nums[i] * nums[i]);
    }
    
    return ansArr.sort((a,b) => a-b);
};