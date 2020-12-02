import React from 'react'

const InputTest = props => {
    return (
        <div>
            {
                isNaN(props.myInput) ? <h1>The Word is: {props.myInput}</h1> : <h1>The Number is: {props.myInput}</h1>
            }
        </div>
    )
}

export default InputTest
