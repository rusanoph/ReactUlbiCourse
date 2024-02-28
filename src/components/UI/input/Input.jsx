import React from 'react'
import classes from './Input.module.css';


const Input = React.forwardRef((props, ref) => {
  return (
    <input ref={ref} className={classes.Input} {...props}/>
  );
});

export default Input
