import { useState } from 'react'

const useForm = (initialState = {}) => {

    const [values, setValues] = useState(initialState)

    const handleInputChange = ({ target }) => {
        setValues({
            ...values,
            [target.name]: target.value
        })
    }

    const handleResetValues = () => {
        setValues(initialState)
    }

    return [
        values,
        handleInputChange,
        handleResetValues
    ]
}

export default useForm
