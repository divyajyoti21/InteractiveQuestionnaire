import React,{useRef} from 'react';
import { useDispatch,useSelector } from "react-redux";
import Button from './Button';
function SelectMenu(props) {
    const counter = useSelector(state => state);
    const value = useRef("");
    const dispatch = useDispatch();
    const submitAnswer = (event) => {
        dispatch({
            type: "SUBMIT_ANSWER",
            payload: {value:value.current.value, index: props.params.id}
        })

    }
    const cancelAnswer = (event) => {
        dispatch({
            type: "RESET_ANSWER",
            payload: {value:null,index: props.params.id}
        })
    }
    return(
        <div>
            <p>{props.params.description}</p>
            <select ref = {value}>
                {props.params.options.map(fbb =>
                <option key = {fbb.key} value = {fbb.key}>{fbb.text}</option>
                )};
            </select>
            <p>
                <Button name = {props.params.value==null ? "Submit" : "Edit"} onClick = {submitAnswer}></Button>
                <Button name = "Cancel" onClick = {cancelAnswer}></Button>
            </p>
        </div>
    );

}

export default SelectMenu;