/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    let charArr = word.split("");
    
    for(let i = 0; i < charArr.length; i++){
        if(charArr[i] === ch){
            let newCharArr = charArr.splice(0, i + 1);
            newCharArr.reverse();
            for(let j = newCharArr.length - 1; j >= 0; j--){
                charArr.unshift(newCharArr[j]);
            }
            break;
        }
    }
    
    return charArr.join("");
};