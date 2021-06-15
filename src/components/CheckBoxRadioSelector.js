import React,{useRef} from 'react';
import {useDispatch} from 'react-redux';
import {useState} from 'react';
import Button from './Button';
function CheckBoxRadioSelector(props) {
    let inputValue = "";
    let uncheck = false;
    let radio = useRef();
    const dispatch = useDispatch();
    const submitAnswer = (event) => {
        if (inputValue.length === 0 ) inputValue = props.params.value;
        let elems = document.querySelectorAll('input[type="radio"]')
        dispatch({
            type: "SUBMIT_ANSWER",
            payload: {value:inputValue, index: props.params.id}
        })
    }
    const cancelAnswer = (event) => {
        unCheck();
        dispatch({
            type: "RESET_ANSWER",
            payload: {value:null,index: props.params.id}
        });    
    }
    const handleChange =(event)=>{
        if (props.params.type === "CHECKBOX") {
        inputValue = inputValue + event.target.value + "  ";
        } else {
            inputValue = event.target.value;
            console.log(inputValue);
        }
    }
    const unCheck = () => {
        if (props.params.type === "RADIO") {
        let elems = document.querySelectorAll('input[type="radio"]')
        elems.forEach(elem => elem.checked = false);
    } else {
        let elems = document.querySelectorAll('input[type="checkbox"]')
        elems.forEach(elem => elem.checked = false);
    }
    }
    return(
        <div>
            <p>{props.params.description}</p>
            <p onChange={(event)=>handleChange(event)}>
            {
                props.params.options.map((elem,i) =>
                    (   
                        <p>
                        <input id={elem.text} ref={radio}  name={props.params.type.toLowerCase()} type={props.params.type.toLowerCase()} value={elem.key}/><label for={elem.text}>{elem.text}</label>
                        </p>
                        
                    ))
            }
            </p>
            <p>
                <Button name = {props.params.value==null ? "Submit" : "Edit"} onClick = {submitAnswer}></Button>
                <Button name = "Cancel" onClick = {cancelAnswer}></Button>
            </p>
        </div>    
    );
}
export default CheckBoxRadioSelector;