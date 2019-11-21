function fizzBuzz(list1=[], list2=[]) {
    // Your code here
    
    if(((list1.length+list2.length)%5===0) && ((list1.length+list2.length)%3===0)){
        return console.log("Fizzbuzz");}

        else if(((list1.length+list2.length)%3===0)){
            return console.log('Fizz');}
            else if(((list1.length+list2.length)%5===0)){
            return console.log("Buzz");}
            else{
            return console.log((list1.length+list2.length));}
    
}

module.exports = fizzBuzz;