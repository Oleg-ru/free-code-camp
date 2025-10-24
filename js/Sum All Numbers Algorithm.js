function sumAll(arrForSum) {

    const sortingArr = [...arrForSum].sort((a, b) => a - b);
    let resultSum = 0;

    for (let i = sortingArr[0]; i <= sortingArr[1]; i++) {
        resultSum+=i;
    }
    return resultSum;
}

// console.log(sumAll([4, 1]))
// console.log(sumAll([10, 5]));
// console.log(sumAll([1, 4]));