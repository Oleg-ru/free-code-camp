const {useState} = React;

export const ColorPicker = () => {
    const [color, setColor] = useState("#ffffff");

    const handleChangeColor = (event) => {
        setColor(event.target.value)
    };

    return (
        <div style={{backgroundColor: color}} id="color-picker-container">
            <div style={{backgroundColor: color}} id="color-picker-container">
                <input type="color"
                       id="color-input"
                       value={color}
                       onChange={() => {handleChangeColor(event)}}
                />
            </div>
        </div>
    )
};