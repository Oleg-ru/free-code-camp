function pairElement(dnk) {

    const doubleHelix = [];

    for (let i = 0; i < dnk.length; i++) {
        let twoHelix = '';
        switch (dnk[i]) {
            case 'A':
                twoHelix = 'T'
                break;
            case 'T':
                twoHelix = 'A'
                break;
            case 'C':
                twoHelix = 'G'
                break;
            case 'G':
                twoHelix = 'C'
                break;
        }
        doubleHelix.push([dnk[i], twoHelix]);
    }
    return doubleHelix;
}

//console.log(pairElement("ATCGA"));