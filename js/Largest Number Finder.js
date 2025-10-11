function largestOfAll(arrayOfArrays) {
    const resultArr = [];
    arrayOfArrays.forEach(arrOfNum => {
        resultArr.push(arrOfNum.sort((a, b) => b - a)[0]);
    })
    return resultArr;
}

// console.log(largestOfAll([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
// console.log(largestOfAll([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]))