func sortArrayByParityII(nums []int) []int {
    evenArr := []int{}
    oddArr := []int{}
    
    for i := 0; i < len(nums); i++{
        if nums[i] % 2 == 0{
            evenArr = append(evenArr, nums[i])
        }else{
            oddArr = append(oddArr, nums[i])
        }
    }
    
    ansArr := []int{}
    
    for i := 0; i < len(evenArr); i++{
        ansArr = append(ansArr, evenArr[i])
        ansArr = append(ansArr, oddArr[i])
    }
    
    return ansArr
}