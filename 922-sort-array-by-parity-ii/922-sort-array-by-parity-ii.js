/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
    let oddArr = [];
    let evenArr = [];
    
    for(let i = 0; i < nums.length; i++){
        if(nums[i] % 2 === 0){
            evenArr.push(nums[i]);        
        }else{
            oddArr.push(nums[i]);
        }
    }
    
    let ansArr = [];
    
    for(let i = 0; i < evenArr.length; i++){
        ansArr.push(evenArr[i]);
        ansArr.push(oddArr[i]);
    }
    
    return ansArr;
};