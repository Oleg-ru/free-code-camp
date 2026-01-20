const {useState, useEffect, useRef} = React;

export const OTPGenerator = () => {

    const [generateValue, setGenerateValue] = useState(null);
    const [timerSecond, setTimerSecond] = useState(null);
    const [endMsg, setEndMsg] = useState(null);
    const [disabledBtn, setDisabledBtn] = useState(false);

    useEffect(() => {
        if (!generateValue) {
            return;
        }

        const interval = setInterval(() => {

            setTimerSecond((prev) => {
                const newValue = prev - 1;
                if (newValue <= 0) {
                    setDisabledBtn(false);
                    clearInterval(interval);
                    setTimerSecond(null);
                    setEndMsg('OTP expired. Click the button to generate a new OTP.')
                    return;
                }
                return newValue;
            });
        }, 1000)

        return () => {
            clearInterval(interval);
        }
    }, [generateValue])

    const handleClick = () => {
        const random6digits = Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
        setEndMsg(null)
        setGenerateValue(random6digits)
        setTimerSecond(5);
        setDisabledBtn(true)
    };

    return (
        <div className="container">
            <h1 id="otp-title">OTP Generator</h1>
            <h2 id="otp-display">{generateValue ? generateValue : "Click 'Generate OTP' to get a code"}</h2>
            <p id="otp-timer" aria-live="assertive">{timerSecond && `Expires in: ${timerSecond} seconds`}{endMsg}</p>
            <button id="generate-otp-button"
                    onClick={handleClick}
                    disabled={disabledBtn}
            >Generate OTP
            </button>
        </div>
    )
};