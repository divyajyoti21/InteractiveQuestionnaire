const QuestionData = 
[{
id:"QUESTION_1",
title: "What is your name?",
description: "Please enter your name",
type: "TEXT",
options: [],
value: null,
enabled : true,
validations : [ { "type": "min", "message": "Your name must not be shorter than 3 characters." }, { "type": "max", "message": "Your name must not be longer than 25 characters." } ]
},
{
id:"QUESTION_2",
title: "What is your gender?",
description: "Please select your gender",
type: "RADIO",
options: [ { "key": "FEMALE", "text": "Female" }, { "key": "MALE", "text": "Male" }, { "key": "OTHER", "text": "Other" } ],
value: null,
enabled : true,
validations : []
},
{
id:"QUESTION_3",
title: "What is your date of birth?",
description: "Please enter your date of birth",
type: "DATE",
options: [],
value: null,
enabled : "QUESTION_2 != OTHER",
validations : []
},
{
id:"QUESTION_4",
title: "What insurances do you have?",
description: "Please select the insurances you have",
type: "CHECKBOX",
options: [ { "key": "HEALTH", "text": "Health" }, { "key": "LIABILITY", "text": "Liability" }, { "key": "LEGAL", "text": "Legal" }, { "key": "CAR", "text": "Car" } ],
value: null,
enabled: true,
validations : []
},
{
id:"QUESTION_5",
title: "What is your employment status?",
description: "Please enter your employment status",
type: "SELECT",
options: [ { "key": "EMPLOYEE", "text": "Employee" }, { "key": "BUSINESS_OWNER", "text": "Business Owner" }, { "key": "HOUSE_SPOUSE", "text": "Housewife / Househusband" }, { "key": "RETIREE", "text": "Retiree" }, { "key": "STUDENT", "text": "Student" }, { "key": "SELF_EMPLOYED", "text": "Self-Employed" }, { "key": "UNEMPLOYED", "text": "Unemployed" } ],
value: null,
enabled : true,
validations : []
},
{
id:"QUESTION_6",
title: "What is your phone number?",
description: "Please enter your phone number",
type: "NUMBER",
options: [] ,
value: null,
enabled : "QUESTION_5 == EMPLOYEE QUESTION_5 == BUSINESS_OWNER QUESTION_5 == STUDENT",
validations : [ { "type": "min", "message": "Your number must be only digits and not shorter than 7." }, { "type": "max", "message": "Your number must be only digits and not longer than 12." } ]
}];

export default QuestionData;
