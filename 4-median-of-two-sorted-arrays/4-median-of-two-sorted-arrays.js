/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let ansArr = [];
    
    for(let i = 0; i < nums1.length; i++){
        ansArr.push(nums1[i]);
    }
    
    for(let i = 0; i < nums2.length; i++){
        ansArr.push(nums2[i]);
    }
    
    ansArr.sort((a,b)=>a-b);
    const mid = Math.floor(ansArr.length / 2);
    
    if(ansArr.length % 2 === 0){
        return (ansArr[mid - 1] + ansArr[mid]) / 2;
    }else{
        return ansArr[mid];
    }
};