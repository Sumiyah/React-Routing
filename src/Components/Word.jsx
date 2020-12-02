import React from 'react'

const Word = props => {
  return (
    <div> 
      {/* Using Terenary Operator!  */}
      { 
        isNaN(props.myInput)
          ? <h1 style={{ backgroundColor: `${props.color2}`, color: `${props.color1}` }} >The Word is: {props.myInput}</h1>
          : <h1 style={{ backgroundColor: `${props.color2}`, color: `${props.color1}` }} >The Number is: {props.myInput}</h1>
      }
    </div>
  )
}

export default Word
