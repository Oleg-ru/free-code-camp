const { useState, useMemo } = React;

const valuteMapping = {
    USD: 1,
    EUR: 0.92,
    GBP: 0.78,
    JPY: 156.7
};

export function CurrencyConverter() {

    const valuteCodes = Object.keys(valuteMapping);

    const [amount, setAmount] = useState(1);
    const [fromCode, setFromCode] = useState(valuteCodes[0]);
    const [toCode, setToCode] = useState(valuteCodes[1]);

    const allConvertedAmounts = useMemo(() => {
        const result = {};
        valuteCodes.forEach(currency => {
            result[currency] = amount * (valuteMapping[currency] / valuteMapping[fromCode]);
        });
        return result;
    }, [amount, fromCode]);

    const resultConvert = allConvertedAmounts[toCode];

    console.log(allConvertedAmounts)

    const handleChangeAmount = (e) => setAmount(Number(e.target.value));
    const handleChangeFromValute = (e) => setFromCode(e.target.value);
    const handleChangeToValute = (e) => setToCode(e.target.value);
    
    return (
        <div className='container'>
            <h1 className="title">Currency Converter</h1>
            <p className='coverted-codes'>{fromCode} to {toCode} Conversion</p>
            <input className="amount" type="number" min="0" onChange={handleChangeAmount} value={amount}/>

            <select className="select" name="from-valute" onChange={handleChangeFromValute} value={fromCode}>
                {valuteCodes.map(code => <option key={code} value={code}>{code}</option>)}
            </select>

            <select className="select" name="to-valute" onChange={handleChangeToValute} value={toCode}>
                {valuteCodes.map(code => <option key={code} value={code}>{code}</option>)}
            </select>

            <div>
                <p className="result-conver">Converted Amount: {resultConvert.toFixed(2)} {toCode}</p>
            </div>
        </div>
    )
}