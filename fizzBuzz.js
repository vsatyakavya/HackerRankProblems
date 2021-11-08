function fizzBuzz(n){
    for(let i =1 ; i <= n; i++){
   if(n % 15 === 0){
       return "fizzBuzz"
   }else if(n %3 === 0){
       return "fizz"
   }else if(n % 5=== 0){
      return "buzz"
   }
   else{
       return false;
   }
}
}

function fizzBuzzTest(n){
   
   for(let i =1; i<n ;i++){
        let output = ''
       if(n % 3 === 0) output += "fizz"
       if(n % 5 === 0) output += "buzz"
       console.log( i +":"+ output );
   }
  


}

// console.log(fizzBuzzTest(10))
// console.log("************************")

console.log(fizzBuzz(15));
// console.log(fizzBuzz(5));
// console.log(fizzBuzz(30));
// console.log(fizzBuzz(6));