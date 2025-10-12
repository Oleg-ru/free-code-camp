function frankenSplice(arrForCopy, arrTarget, beginInsertIndex) {
    const resultArr = [...arrTarget]
    resultArr.splice(beginInsertIndex, 0, ...arrForCopy);
    return resultArr;
}