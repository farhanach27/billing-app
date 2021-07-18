import React from 'react';
import { ErrorMessage, useField } from 'formik'
import './Forms.css'

const TextArea = ({label, ...props}) => {
    const [field, meta] = useField(props);

    return (
        <div className='w-30'>
            <label htmlFor={field.name}>{label}</label>
            <textarea 
                className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`}
                {...field} {...props}
                autoComplete='off'
            />
            <ErrorMessage className='error' name={field.name} />
        </div>
    )
}

export default TextArea;