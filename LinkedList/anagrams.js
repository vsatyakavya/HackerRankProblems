function checkAnagrams(c, d){
    const a = c.toLowerCase();
    const b = d.toLowerCase();

    if(a === b){
        return true;
    }
    if(a.length !== b.length){
        return false;
    }

    const chars ={};

    for(const letter of a){
        if(!(letter in chars)) chars[letter] = 0;
        chars[letter]++;
    }

    for(const letter of b){
        if(!(letter in chars) ||  chars[letter] === 0) return false;
        chars[letter]--;
    }
    return true

}


console.log("expected true --- "+ checkAnagrams("Krisha", "shrika"))
console.log("expected true ---- "+ checkAnagrams("Krisha", "sHrika"))
console.log("expected false---- "+checkAnagrams("K risha", "shrika"))
console.log("expected false----"+checkAnagrams("Krisha", "shriaa"))