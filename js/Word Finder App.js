function findLongestWordLength(str) {
    return str.split(' ').sort((a, b) => a.length - b.length)[str.split(' ').length - 1].length;
}

console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology"))