import React from 'react';
import {ErrorMessage,useField} from 'formik';

const TextFieldLogin = ({label, ...props}) => {
    const [field, meta] = useField(props)
  return (
    <div>
        <label htmlFor={field.name}>
            {label}
        </label>
            <input autoComplete='off' {...field} {...props}/>
            <ErrorMessage name={field.name}/>
    </div>
 
  )
}

export default TextFieldLogin;