import React from 'react'
import classes from './FormControls.module.css'

export const FormControl = ({input, meta, children, ...props}) => {
    const hasError = meta.touched && meta.error

    return (
        <div className={classes.formControl + " " + (hasError ? classes.error : '')}>
            <div>{children}</div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const TextArea = (props) => {
    const {input, ...restProps} = props
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
}

export const Input = (props) => {
    const {input, ...restProps} = props
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
}