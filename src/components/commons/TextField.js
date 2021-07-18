import React from 'react';
import { ErrorMessage, useField } from 'formik'
import './Forms.css';

const TextField = ({label, ...props}) => {
    const [field, meta] = useField(props);

    return (
        <div>
            <label htmlFor={field.name}>{label}</label>
            <input 
                className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`}
                {...field} {...props}
                autoComplete='off'
            />
            <div className='error'>
                <ErrorMessage  name={field.name} />
                <span></span>
            </div>
            
        </div>
    )
}

export default TextField;