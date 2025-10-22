function uniteUnique(mainArr, ...arrays) {
    const setMainArr = new Set(mainArr);

    for (let array of arrays) {
        for (let arrayElement of array) {
            setMainArr.add(arrayElement);
        }
    }
    return [...setMainArr]
}

//console.log(uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]));