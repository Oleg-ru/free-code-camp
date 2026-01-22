const { useState, useMemo } = React;

const valuteMapping = {
    USD: 1,
    EUR: 0.92,
    GBP: 0.78,
    JPY: 156.7
};

export function CurrencyConverter() {

    const valuteCodes = Object.keys(valuteMapping);

    const convertDirect = (amount, from, to) => {
        return amount * (valuteMapping[to] / valuteMapping[from]);
    }
    
    return (
        <div>
            <input type="number" min="0"/>
            <select name="from-valute">
                {valuteCodes.map(code => <option>{code}</option>)}
            </select>
            <select name="to-valute">
                {valuteCodes.map(code => <option>{code}</option>)}
            </select>
            <div>
                <p>Converted Amount: {0}</p>
            </div>
        </div>
    )
}