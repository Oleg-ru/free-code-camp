function chunkArrayInGroups(arr, splitNumArr) {
    const resultArr = [];

    for (let j = 0, i = 0; i < arr.length / splitNumArr; i++, j += splitNumArr) {
        resultArr.push(arr.slice(j, j + splitNumArr));
    }
    return resultArr;
}

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4));