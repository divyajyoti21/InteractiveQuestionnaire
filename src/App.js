import React, { useState, useEffect, Fragment } from 'react'
import QuestionData from './QuestionData';
import TextBox from './components/TextBox';
import SelectMenu from './components/SelectMenu';
import CheckBoxRadioSelector from './components/CheckBoxRadioSelector';
import CollapsibleAccordin from './components/CollapsibleAccordin';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import Button from './components/Button';

const App = () => {
	// Data
	const [usersData,setUserData] = useState(QuestionData);
	const questionData = useSelector(state => state);
	const dispatch = useDispatch();
	const [allQuestionsAnswered, updateAllQuestionsAnswered] = useState(false);
	let questionState = {toggleStatus:"collapsed", statusColor: "blue", isEnabled: true};
	let questionsAnswered = 0;
	useEffect(()=>{
		for (let i = 0; i < questionData.length; i++) {
			if (questionData[i].value) questionsAnswered ++;
		}
		if (questionsAnswered === 6) {
			updateAllQuestionsAnswered(true);
		} else {
			updateAllQuestionsAnswered(false);
		}
		setUserData(questionData);
	},[questionData])

	const refreshPage = () => {
		window.location.reload();
	}

	return (
		<div className="container">
			{
			usersData.map((question,index) => (
			<CollapsibleAccordin key={index} params={question}></CollapsibleAccordin>
			))
		}
		<Button classname = {`${(allQuestionsAnswered) ? "buttonDone" : "buttonNone"}`} name = "Reset Form" onClick={refreshPage}></Button>
		</div>
	)
}

export default App
