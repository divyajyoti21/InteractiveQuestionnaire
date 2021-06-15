import React from 'react';
function CollapsibleButton(props) {
    function handleClick(event) {
        props.onClick(event.target.id);
    }
    return(
        <button id = {props.params.id} disabled = {props.params.enabled === false ? true : false} className = "accordion" onClick = {handleClick}>
            <div id = {props.params.id} className = "accordinHead">
                <span id = {props.params.id} className = "accordinLeft">{props.params.id}:{props.params.title}</span>
                <span id = {props.params.id} >{props.params.value}</span>
                <span id = {props.params.id} className = {`${props.params.value == null ? "accordinAnswered" : "accordinUnAnswered"}`} ></span>
            </div>
        </button>
    )
}
export default CollapsibleButton