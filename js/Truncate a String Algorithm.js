function truncateString(str, sliceNum) {
    return str.length <= sliceNum ? str : str.slice(0, sliceNum) + "...";
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8))
console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11))
console.log(truncateString("A-", 1))
console.log(truncateString("Absolutely Longer", 2))