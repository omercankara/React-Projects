import React from 'react'

const Alert = (props) => {
    return (
        props.error !== null &&(
            <div className={`container text-center mt-2 alert alert-${props.error.type}`}>{props.error.msg}</div>
        )
    )
}

export default Alert