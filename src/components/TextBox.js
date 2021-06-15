import React, { useEffect, useState, useRef} from 'react';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Button from './Button'
function TextBox(props) {
    const counter = useSelector(state => state);
    const dispatch = useDispatch();
    const inputValue = useRef("");
    const [errorMessage,setErrorMessage] = useState(
        {
            max_length:0,
            min_length:0,
            min_error:"",
            max_error:"",
            error_message:""
    });

    useEffect(() => {
        let min_length = 0;
        let max_length = 0;
        let min_error = "";
        let max_error = "";
        props.params.validations.forEach(element => {
            if(element.type == "min") {
                let numb = element.message.match(/\d/g);
                numb = numb.join("");
                console.log(numb);
                min_length = numb;
                min_error = element.message;
    
            }
            if(element.type == "max") {
                let numb = element.message.match(/\d/g);
                numb = numb.join("");
                console.log(numb);
                max_length = numb;
                max_error = element.message;
                
            }   
        });
        setErrorMessage({
            max_length : max_length,
            min_length : min_length,
            min_error : min_error,
            max_error : max_error,
            error_message : ""
    });
    },[]);
    const handleChange = (event) => {
        let curr_value = event.target.value;
        console.log("currentValue="  + curr_value);
        let error_message = "";
        if (curr_value.length < errorMessage.min_length) {
            error_message = errorMessage.min_error;
            
        }
        if (curr_value.length > errorMessage.max_length) {
            error_message = errorMessage.max_error;
        }
        setErrorMessage(prevState => ({
            ...prevState,       
            error_message: error_message    
          }));
    }; 
    const submitAnswer = (event) => {
        if (!errorMessage.error_message && inputValue.current.value.length !== 0) {
            dispatch({
                type: "SUBMIT_ANSWER",
                payload: {value:inputValue.current.value, index: props.params.id}
            })
        } else {
            setErrorMessage (Object.assign({},errorMessage,{error_message : errorMessage.min_error}))
        }
    }
    const cancelAnswer = (event) => {
        inputValue.current.value = "";
        setErrorMessage (Object.assign({},errorMessage,{error_message : ""}));
        dispatch({
            type: "RESET_ANSWER",  
            payload: {value:null,index: props.params.id}
        })
    }
    return(

        <div>
            <p>{props.params.description}</p>
            <p><input ref={inputValue} onChange = {(event)=> handleChange(event)} type = {props.params.type.toLowerCase()}></input></p>
            <p><span className="error">{errorMessage.error_message}</span></p>
            <p>
                <Button name = {props.params.value==null ? "Submit" : "Edit"} onClick = {submitAnswer}></Button>
                <Button name = "Cancel" onClick = {cancelAnswer}></Button>
            </p>
        </div>
    );
}

export default TextBox;