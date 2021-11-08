function numberOfWords(string1){
    if(string1 === null){
        return  null
    }
 const string = string1.trim();
  let count = 0;
  let i = 0;
  //while condition until length of the string
  while(i < string.length){
//increment i until space occurs.
   while(i< string.length && string[i] !== " "){
        i++;
   }
   count++
//increment i until no space.
   while(i < string.length && string[i] === " "){
       i++
   }
}
return count;
}

console.log("expected 2  "+ numberOfWords("satya kavya"))
console.log("expected 2  "+ numberOfWords("  satya        kavya       "))
console.log("expected 4  "+ numberOfWords("satya        k  avya   varri    "))
console.log("expected 3  "+ numberOfWords("satya kavya varri     "))
console.log("expected 0  "+ numberOfWords("               "))
console.log("expected null  "+ numberOfWords(null))