import React from 'react';

const char = (props) => {
  const charStyles = {
    display: 'inline',
    backgroundColor: 'orange',
    color: 'white',
    padding: '5px',
    margin: '5px'
  }

  return (
    <p style={charStyles}
      onClick={props.click}
    >
      {props.char}
    </p>
  )
}

export default char; 