/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
    let count = 0;
    
    while(students.length > 0 && sandwiches.length > 0 && count < 1000){
        if(students[0] === sandwiches[0]){
            students.shift();
            sandwiches.shift();
            count++;
        }else{
            students.push(students[0]);
            students.shift();
            count++;
        }
    }
    
    if(students.length > 0){
        return students.length;
    }else{
        return 0;
    }
    
};