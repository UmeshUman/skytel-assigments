import React, { useState } from 'react';
import s from "./style.module.css"

const MultiSelect = ({ value, readonly }) => {
    const [selectedValues, setSelectedValues] = useState(value);

    const handleCheckboxChange = (event) => {
        const { value: checkboxValue, checked } = event.target;

        if (checked) {
            setSelectedValues((prevSelectedValues) => [
                ...prevSelectedValues,
                checkboxValue,
            ]);
        } else {
            setSelectedValues((prevSelectedValues) =>
                prevSelectedValues.filter((val) => val !== checkboxValue)
            );
        }
    };

    return (
        <>
            <div className={s.section}>
                {['Portugal'].map((option) => (
                    <label key={option}>
                        <input
                            type="checkbox"
                            value={option}
                            checked={selectedValues.includes(option)}
                            onChange={handleCheckboxChange}
                            disabled={readonly}
                        />
                        {option}
                    </label>
                ))}
            </div>
            <div className={s.section2}>
                {['Argentina'].map((option) => (
                    <label key={option}>
                        <input
                            type="checkbox"
                            value={option}
                            checked={selectedValues.includes(option)}
                            onChange={handleCheckboxChange}
                            disabled={readonly}
                        />
                        {option}
                    </label>
                ))}
            </div>

            <div className={s.section3}>
                {['Brazil'].map((option) => (
                    <label key={option}>
                        <input
                            type="checkbox"
                            value={option}
                            checked={selectedValues.includes(option)}
                            onChange={handleCheckboxChange}
                            disabled={readonly}
                        />
                        {option}
                    </label>
                ))}
            </div>

        </>


    );
};

export default MultiSelect;