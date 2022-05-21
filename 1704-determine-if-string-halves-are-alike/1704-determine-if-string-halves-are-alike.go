func halvesAreAlike(s string) bool {
    strArr := strings.Split(s, "")
    
    firstHalf := strArr[0:len(strArr) / 2]
    secondHalf := strArr[len(strArr) / 2: len(strArr)]
    
    count1 := 0
    count2 := 0
    
    for i := 0; i < len(firstHalf); i++{
        if strings.ToLower(firstHalf[i]) == "a"{
            count1++
        }else if strings.ToLower(firstHalf[i]) == "e"{
            count1++
        }else if strings.ToLower(firstHalf[i]) == "i"{
            count1++
        }else if strings.ToLower(firstHalf[i]) == "o"{
            count1++
        }else if strings.ToLower(firstHalf[i]) == "u"{
            count1++
        }
        
        if strings.ToLower(secondHalf[i]) == "a"{
            count2++
        }else if strings.ToLower(secondHalf[i]) == "e"{
            count2++
        }else if strings.ToLower(secondHalf[i]) == "i"{
            count2++
        }else if strings.ToLower(secondHalf[i]) == "o"{
            count2++
        }else if strings.ToLower(secondHalf[i]) == "u"{
            count2++
        }
    }
    
    if count1 == count2{
        return true
    }else{
        return false
    }
}