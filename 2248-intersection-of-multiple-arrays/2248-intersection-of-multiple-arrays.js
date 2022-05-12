/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var intersection = function(nums) {
    let numMap = {};
    
    for(let i = 0; i < nums.length; i++){
        for(let j = 0; j < nums[i].length; j++){
            numMap[nums[i][j]] ? numMap[nums[i][j]]++ : numMap[nums[i][j]] = 1;
        }
    }
    
    let ansArr = [];
    
    for(const property in numMap){
        if(numMap[property] === nums.length){
            ansArr.push(parseInt(property));
        }
    }
    
    return ansArr;
};