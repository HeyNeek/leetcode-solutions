func buildArray(nums []int) []int {
    arr := []int{}
    
    for i := 0; i < len(nums); i++{
        arr = append(arr, nums[nums[i]])
    }
    
    return arr
}