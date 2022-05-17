/**
 * @param {string} rings
 * @return {number}
 */
var countPoints = function(rings) {
    let ringMap = {
        "0": "",
        "1": "",
        "2": "",
        "3": "",
        "4": "",
        "5": "",
        "6": "",
        "7": "",
        "8": "",
        "9": ""
    };
    
    for(let i = 0; i < rings.length; i+= 2){
        if(rings[i] === "B"){
            ringMap[rings[i + 1]] = ringMap[rings[i + 1]] + "B";
        }else if(rings[i] === "R"){
            ringMap[rings[i + 1]] = ringMap[rings[i + 1]] + "R";
        }else{
            ringMap[rings[i + 1]] = ringMap[rings[i + 1]] + "G";
        }
    }
    
    let count = 0;
    
    for(const property in ringMap){
        if(ringMap[property].includes("B") && ringMap[property].includes("R") && ringMap[property].includes("G")){
            count++;
        }
    }
    
    return count;
};