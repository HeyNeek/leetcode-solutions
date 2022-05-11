/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    
    /*create empty array variable ans to hold the values we will push into it*/
    let ans = [];
    
    /*create a for loop that iterates through the entire array nums, and inside
    it, we push the index of the current element's value into our ans array*/
    for(let i = 0; i < nums.length; i++){
        ans.push(nums[nums[i]]);
    }
    //then we return the array
    return ans;
};