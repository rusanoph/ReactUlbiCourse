import React from 'react'
import classes from './Select.module.css';

const Select = ({options, defaultValue, value, onChange}) => {
  return (
    <div className={classes.Select}>
        <select style={{border: 'none', outline: 'none'}} value={value} onChange={e => onChange(e.target.value)}>
            <option disabled value="">{defaultValue}</option>
            {options.map(option => 
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>)
            }
        </select>
    </div>
  )
}

export default Select