"use client"
import React, { useState } from 'react'

const TextInput = ({type, label, name}: {type: string, label: string, name: string}) => {

        const [value, setValue] = useState('');
      
        function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
          setValue(e.target.value);
        }
  return (
    <div className="input-container">
    <input type={type} value={value} onChange={handleChange} />
    <label className={value && 'filled'} htmlFor={name}>
      {label}
    </label>
  </div>
  )
}

export default TextInput