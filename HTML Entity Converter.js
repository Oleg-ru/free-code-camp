function convertHTML(strForConvert) {
    const resultConvert = [];
    strForConvert.split('').forEach(char => {
        let currentChar = char;

        switch (char) {
            case '&':
                currentChar = '&amp;'
                break;
            case '<':
                currentChar = '&lt;'
                break;
            case '>':
                currentChar = '&gt;'
                break;
            case '"':
                currentChar = '&quot;'
                break;
            case "'":
                currentChar = '&apos;'
                break;
        }

        resultConvert.push(currentChar)
    })
    return resultConvert.join('');
}

//console.log(convertHTML("Dolce & Gabbana"));