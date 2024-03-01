import React, { useContext } from 'react'
import { AlertContext } from '../context/alertContext'

const Alert = () => {
    const { error } = useContext(AlertContext)
    return (
        error !== null && (
            <div
                className={`container text-center mt-2 alert alert-${error.type}`}>{error.msg}
            </div>
        )
    )
}

export default Alert