/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    //create an empty array variable to fill with the correct two indices later
    let answerArr = [];
    
    /*create a for loop with another for loop nested inside that will add each
    element i and j to each other and test if they are equal to the passed in
    target integer, once the condition is satisfied, we push the current indices
    i and j into the answerArr*/
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[i] + nums[j] === target){
                answerArr.push(i, j);
            }
        }
    }
    
    //then when the for loop operations are finished we return the answerArr array
    return answerArr;
};