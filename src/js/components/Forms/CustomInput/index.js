
import React from 'react';

function CustomInput(props) {
    const {label, placeholder} = props;
    return (
        <div className="form-group custom-form-group">
            <label htmlFor={`input${label}`}>{label}</label>
            <input type="text" className="form-control" id={`input${label}`} aria-describedby={`emailHelp`} placeholder={placeholder}/>
            {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
        </div>
    )
}

export default CustomInput;