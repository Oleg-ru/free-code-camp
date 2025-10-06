function confirmEnding(str, endStr) {
    return str.slice(-endStr.length) === endStr;
}

console.log(confirmEnding("Abstraction", "action"))