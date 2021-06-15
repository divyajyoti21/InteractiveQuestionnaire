import React,{useRef,useEffect} from 'react';
import TextBox from './TextBox';
import CheckBoxRadioSelector from './CheckBoxRadioSelector';
import SelectMenu from './SelectMenu';
import {useDispatch} from "react-redux";
import CollapsibleButton from './CollapsibleButton'
function CollapsibleAccordin(props) {
    const panel = useRef(null);
    const dispatch = useDispatch();
    const collapsibleButtonClick = (value) => {
        dispatch({type: "COLLAPSE_EXPAND",payload: {value:"", index: value} })
    }
    if (props.params.type === "TEXT" || props.params.type === "DATE" || props.params.type === "NUMBER") {
        return(
        <div className="questionBlock">
            <CollapsibleButton params = {props.params} onClick = {collapsibleButtonClick}></CollapsibleButton>
            <div>
                <div ref = {panel} className = {`${(props.params.collapsed) ? "panelNone" :"panelBlock"}`}>
                    <TextBox params = {props.params} ></TextBox>
                </div>
            </div>
        </div>
        );
    }
    else if (props.params.type === "RADIO" || props.params.type === "CHECKBOX") {
        return(
        <div className="questionBlock">
            <CollapsibleButton params = {props.params} onClick = {collapsibleButtonClick}></CollapsibleButton>
            <div>
                <div ref = {panel} className = {`${(props.params.collapsed) ? "panelNone" : "panelBlock"}`}>
                    <CheckBoxRadioSelector params = {props.params}></CheckBoxRadioSelector>
                </div>
            </div>
        </div>
        );
    } else if (props.params.type === "SELECT") {
        return(
        <div className = "questionBlock">
            <CollapsibleButton params = {props.params} onClick = {collapsibleButtonClick}></CollapsibleButton>
            <div>
                <div ref = {panel} className = {`${(props.params.collapsed) ? "panelNone" :"panelBlock"}`}>
                    <SelectMenu params = {props.params}></SelectMenu>
                </div>
            </div>
        </div>
        );
    } else {}
}
export default CollapsibleAccordin;