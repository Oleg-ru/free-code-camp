function mutation(arr) {
    const arrChar =  arr[1].toLowerCase().split('');

    for (let i = 0; i < arr[1].length; i++) {
        if (arr[0].toLowerCase().includes(arrChar[i]))
            continue;
        else
            return false;
    }
    return true;
}

console.log(mutation(["hello", "Hello"]))
console.log(mutation(["hello", "hey"]))