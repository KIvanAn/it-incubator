export const requiredField = value =>  value ? undefined : 'Field is required'

export const maxLengthCreator = (maxLength) => value => value && value.length > maxLength ? `Max length is ${maxLength} symbols` : undefined

export const minLengthCreator = (minLength) => value => value && value.length < minLength ? `Min length is ${minLength} symbols` : undefined