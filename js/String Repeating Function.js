function repeatStringNumTimes(stringForRepeat, numRepeat) {
    const resultStr = [];
    if (numRepeat > 0) {
        for (let i = 0; i < numRepeat; i++) {
            resultStr.push(stringForRepeat);
        }
    }
    return resultStr.join('');
}