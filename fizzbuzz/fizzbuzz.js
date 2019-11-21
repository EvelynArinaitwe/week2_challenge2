function fizzBuzz(list1=[], list2=[]) {
    // Your code here
    
    if(((list1.length+list2.length)%5===0) && ((list1.length+list2.length)%3===0)){
         console.log("Fizzbuzz");
         return "Fizzbuzz";
        }

        else if(((list1.length+list2.length)%3===0)){
             console.log('Fizz');
             return "Fizz";
            }
            else if(((list1.length+list2.length)%5===0)){
             console.log("Buzz");
             return "Buzz";
            }
            /*else if(((list1.length+list2.length)%2===0)){
                console.log("Even");
                return "Even"
            }*/
            else{
             console.log((list1.length+list2.length));
             return list1.length+list2.length;
            }
    
}

module.exports = fizzBuzz;