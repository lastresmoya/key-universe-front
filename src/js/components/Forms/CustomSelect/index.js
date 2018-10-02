
import React from 'react';

function CustomSelect({label,opts}) {
    let renderOptions = () => {
        return opts.map((optionItem, i) => {
            function defaultV (i){
                if (i === 0) { return true };
            }
            return <option defaultValue={defaultV()} value={optionItem} key={`option-${i}`}>{optionItem}</option>;
        })
    }
    return (
        <div className="form-group custom-form-group">
        
            <label htmlFor={`input${label}`}>{label}</label>

            <select className="custom-select" id={`inputGroupSelect${label}`}>
                {/* <option defaultValue>{opts[0]}</option> */}
                {renderOptions()}
            </select>
        </div>
    )
}

export default CustomSelect;