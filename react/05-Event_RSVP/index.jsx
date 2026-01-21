const {useState} = React;


const InputField = ({labelTitle, type, required = false, handleChange, name, value, ...props}) => {
    return (
        <div className="input-item">
            <label className="input-label">
                <span className="input-title">{labelTitle}</span>:
                <input name={name}
                       className="input"
                       type={type}
                       required={required}
                       onChange={handleChange}
                       value={value}
                       {...props}
                />
            </label>
        </div>
    )
};

const CheckboxField = ({labelTitle, handleChange, checked, name}) => {
    return (
        <div className="checkbox-item">
            <label>
                <span className="checkbox-title">{labelTitle}</span>
                <input checked={checked} type="checkbox" className="checkbox" onChange={handleChange} name={name}/>
            </label>
        </div>
    )
};

const ResultSubmit = ({formData}) => {
    return (
        <div className="result-submit">
            <h3 className='result-submit__title'>RSVP Submitted!</h3>
            <p>Name: {formData.name}</p>
            <p>Email: {formData.email}</p>
            <p>Number of Attendees: {formData.attendees}</p>
            <p>Preferences: {formData.preferences ? formData.preferences : 'None'}</p>
            <p>Bringing additional guests? {formData.additionalGuests ? 'Yes' : 'No'}</p>
        </div>
    )
};

export function EventRSVPForm() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        attendees: 1,
        preferences: '',
        additionalGuests: false
    });

    const [resultSubmit, setResultSubmit] = useState(null);

    const handleChange = (e) => {
        const {value, name, checked, type} = e.target;
        console.log(type)
        console.log(e.target.checked)
        setFormData((prev) => {
            return {...prev, [name]: type === 'checkbox' ? checked : value}
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setResultSubmit(true)
    };

    return (
        <div className="container">
            <div className="box">
                <div className="sub-container">
                <form className="form-container" onSubmit={handleSubmit}>
                    <h2 className="title">Event RSVP Form</h2>
                    <InputField labelTitle="Name"
                                type="text"
                                required={true}
                                handleChange={handleChange}
                                name="name"
                                value={formData.name}
                    />
                    <InputField labelTitle="Email"
                                type="email"
                                required={true}
                                handleChange={handleChange}
                                name="email"
                                value={formData.email}
                    />
                    <InputField labelTitle="Number of Attendees"
                                type="number" required={true}
                                handleChange={handleChange}
                                name="attendees"
                                value={formData.attendees}
                                min="1"
                    />
                    <InputField labelTitle="Preferences"
                                type="text" handleChange={handleChange}
                                name="preferences"
                                value={formData.preferences}
                    />
                    <CheckboxField labelTitle="Bringing additional guests?"
                                   handleChange={handleChange}
                                   name="additionalGuests"
                                   checked={formData.additionalGuests}
                    />
                    <button className="submit-btn">Submit RSVP</button>
                </form>
                {resultSubmit && <ResultSubmit formData={formData}/>}
                </div>
            </div>
        </div>

    )
}