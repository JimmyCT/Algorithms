//this function runs in a O(n) average time where n is the length of the stirng passed in
//This function contains O(1) space as the list of of frequencies and indicies are a fixed amount
function firstNotRepeatingCharacter(s) {
    if (s.length === 1) {
        return s[0];
    }
    let minNonRepeatingIndex = s.length;
    
    const freq = new Array(26).fill(0);
    const indicies = new Array(26).fill(-1);
    for (let i = 0; i < s.length; i++) {
        const charCode = s.charCodeAt(i) - 97;
        
        if (indicies[charCode] === -1) {
            indicies[charCode] = i;
        }
        
        freq[charCode]++;
    }
    
    for (let i = 0; i < freq.length; i++) {
        if (freq[i] === 1) {
            minNonRepeatingIndex = minNonRepeatingIndex < indicies[i] ? minNonRepeatingIndex : indicies[i];
        }
    }
    
    if (minNonRepeatingIndex === s.length) {
        return '_';
    } else {
        return s[minNonRepeatingIndex];
    }
}
