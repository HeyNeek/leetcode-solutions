/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    
    let intersectionArr = [];
    
    for(let i = 0; i < nums1.length; i++){
        for(let j = 0; j < nums2.length; j++){
            if(nums1[i] === nums2[j]){
                intersectionArr.push(nums1[i]);
            }
        }
    }
    
    console.log(intersectionArr);
    
    for(let i = 0; i < intersectionArr.length; i++){
        for(let j = i + 1; j < intersectionArr.length; j++){
            if(intersectionArr[i] === intersectionArr[j]){
                // console.log(intersectionArr);
                intersectionArr.splice(j, 1);
                i = -1;
            }
        }
    }
    
    return intersectionArr;
};