import React from 'react';
import { render } from 'react-dom';
function Button(props) {
    function handleClick(event) {
        props.onClick(event.target.id);
    }
    return(
        <React.Fragment>
        <button className = {props.classname} onClick = {handleClick}>{props.name}</button>
        </React.Fragment>
    )
}
export default Button