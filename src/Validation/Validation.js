import React from 'react';

const validation = (props) => {
  
  const validationMessage = (props.txtLength >= props.minLength)
    ? 'text long enough' 
    : 'text not long enough'; 

  return(
    <div>
      <p>{props.txtLength}</p>
      <p>{validationMessage}</p>
    </div>
  )
}

export default validation; 