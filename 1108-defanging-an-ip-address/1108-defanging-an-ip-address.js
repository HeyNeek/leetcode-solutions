/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    let addressArr = address.split("");
    
    for(let i = 0; i < addressArr.length; i++){
        if(addressArr[i] === "."){
            addressArr.splice(i, 1, "[.]");
        }
    }
    
    return addressArr.join("");
};