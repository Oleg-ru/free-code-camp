function fearNotLetter(sequenceOfLetters) {
    const sequenceAllLetters = 'abcdefghijklmnopqrstuvwxyz';
    const firstFindIndex = sequenceAllLetters.indexOf(sequenceOfLetters[0]);
    const expectedSequence =
        sequenceAllLetters.slice(firstFindIndex, sequenceOfLetters.length + firstFindIndex);

    if (sequenceOfLetters === expectedSequence)
        return;
    for (let i = 0; i < expectedSequence.length; i++) {
        if (expectedSequence[i] === sequenceOfLetters[i])
            continue;
        return expectedSequence[i];
    }
}

//console.log(fearNotLetter('abce'));
// console.log(fearNotLetter("stvwx"))
// console.log(fearNotLetter("bcdf"))