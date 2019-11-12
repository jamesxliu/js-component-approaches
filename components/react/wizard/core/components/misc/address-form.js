import React from 'react';
import statesWithAbbreviations from '../../../states-with-abbreviations';

const AddressForm = ({name, street, city, state, zip, handleChange}) => (
    <form>
        <label>
            Name
            <input type="text"
                   name="name"
                   value={name}
                   onChange={handleChange} />
        </label>
        <label>
            Street
            <input type="text"
                   name="street"
                   value={street}
                   onChange={handleChange} />
        </label>
        <div className="inputGroup">
            <label>
                City
                <input type="text"
                       name="city"
                       value={city}
                       onChange={handleChange} />
            </label>
            <label>
                State
                <select value={state}
                        name="state"
                        onChange={handleChange}>
                    {Object.keys(statesWithAbbreviations).map((statesFullName, idx) => (
                        <option key={`us_state_${idx}`}
                                value={statesWithAbbreviations[statesFullName]}>
                            {statesFullName}
                        </option>
                    ))}
                </select>
            </label>
            <label>
                Zip
                <input type="number"
                       name="zip"
                       value={zip}
                       onChange={handleChange} />
            </label>
        </div>

    </form>
);

export default AddressForm;