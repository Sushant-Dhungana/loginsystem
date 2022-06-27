import React from 'react';
import {ErrorMessage,useField} from 'formik';

const TextField = ({label, ...props}) => {
    const [field, meta] = useField(props)
  return (
    <div className='msg'>
        <label htmlFor={field.name}>
            {label}
        </label>
            <input 
            autoComplete='off' {...field} {...props}/>
            <ErrorMessage name={field.name} component="div" className='errormsg'/>
    </div>
 
  )
}

export default TextField