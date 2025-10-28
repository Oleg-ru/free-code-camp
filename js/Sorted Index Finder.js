function getIndexToIns(array, number) {
    array.sort((a, b) => a - b);
    return array.findIndex(el => el >= number)
}


// console.log(getIndexToIns([1, 2, 3, 4], 1.5) )
// console.log(getIndexToIns([20, 3, 5], 19))
// console.log(getIndexToIns([3, 10, 5], 3))