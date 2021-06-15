import QuestionData from '../QuestionData'
import React from 'react';	
 
function reducer(state = QuestionData, action) {
  let new_state = [];
  switch (action.type) {
    case "SUBMIT_ANSWER" : {
      new_state = state.map((elem,i,array) => {
        let obj = Object.assign({},elem);
        if (elem.id === action.payload.index) {
          obj.value = action.payload.value;
          obj.collapsed = true;
          if(array[i+1]) array[i+1].collapsed = false;
        }
        if (action.payload.index === "QUESTION_2" && action.payload.value  && i === 2) {
          if (action.payload.value === "OTHER") {
            obj.collapsed = true;
            obj.enabled = false;
          } else {
            obj.enabled = true;
          }
        }
        if (action.payload.index === "QUESTION_5" && i === 5 && action.payload.value) {
          if (action.payload.value === "EMPLOYEE" || action.payload.value === "BUSINESS_OWNER" || action.payload.value === "STUDENT") {
            obj.enabled = true;
          } else {
            obj.collapsed = true;
            obj.enabled = false;
          }
        }
        return obj;
      });
      return new_state;
    }

    case "RESET_ANSWER" : {
      let last_answered = state.find(elem=> elem.value !== null);
      for (let i = state.length - 1; i > 0; i--) {
        if (state[i].value !== null && state[i].id !== action.payload.index) {
          last_answered = state[i];
          break;
        }
      }
      new_state = state.map((elem,i) => {
        let obj = Object.assign({},elem);
        if (elem.id === action.payload.index) {
          obj.value = null;
          obj.collapsed = true;
          obj.showErrorMessage = false;
        }
        if (last_answered && last_answered.id === elem.id) obj.collapsed = false;
        obj.enabled = true;
        return obj;
      });
      return new_state;
    }

    case "COLLAPSE_EXPAND": {
      new_state = state.map((elem,i) => {
        let obj = Object.assign({},elem);
        if (elem.id === action.payload.index) {
          if (obj.collapsed === true) {
            obj.collapsed = false;
          } else {
            obj.collapsed = true;
          }
        }
        return obj;
      });
      return new_state;
    }

    default: {
      let first_unanswered = state.find(elem=> elem.value === null);
      new_state = state.map((elem,i,array) => {
        let obj = Object.assign({},elem);
        obj.collapsed = true;
        obj.transition = "";
        obj.showErrorMessage = false; 
        if (first_unanswered && first_unanswered.id === elem.id) {obj.collapsed = false; obj.transition = "current"};
        return obj;
      });
      return new_state;
    }
  }
}
 
export default reducer;