func mergeAlternately(word1 string, word2 string) string {
    ansStr := []string{}
    
    greater := 0
    
    if len([]rune(word1)) > len([]rune(word2)){
        greater = len([]rune(word1))
    }else{
        greater = len([]rune(word2))
    }
    
    for i := 0; i < greater; i++{
        if i < len([]rune(word1)){
            ansStr = append(ansStr, string([]rune(word1)[i]))
        }
        
        if i < len([]rune(word2)){
            ansStr = append(ansStr, string([]rune(word2)[i]))
        }
    }
    
    return strings.Join(ansStr, "")
}