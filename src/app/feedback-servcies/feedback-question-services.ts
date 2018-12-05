import { Injectable }       from '@angular/core';

import { QuestionModel } from '../question-model/question-model';
import { TextboxQuestion } from '../form-field-types/question-textbox';

@Injectable()
export class feedBackServices {
     ids:any = [];dataArr = [];
  getQuestions() { 

    let fields = {
      
      "form_header": "Your Feedback",
    "fields": [    
      {  
         "hint":"emailAddress",
         "label":"Email",
         "isOptional":true,
         "order":2,
         "controlType":"textbox",
         "fieldType":"email",
         "fieldName":"emailAddress",
         "values": [],
         "value":''
      },
      {
        "hint": "textarea",
        "label": "Please Leave your feedback",
        "order": 1,
        "values": [],
        "fieldName": "mytextarea",
        "controlType":"textarea",
        "fieldType": "textarea",
        "isOptional": true, 
        "value":''
      } ,{
        "hint": "MobileNumber",
        "label": "What is Your Mobile Number?",
        "order": 0,
        "values": [],
        "fieldName": "MobileNumber",
        "controlType":"textbox",
        "fieldType": "number",
        "isOptional": true,
        "value":''
      },{
        "hint": "Gender",
        "label": "What is your Gender?",
        "order": 9,
        "values": [
          {
            "name": "radioinput",
            "value": "Male"
          },
          {
            "name": "radioinput",
            "value": "Female"
          }
        ],
        "fieldName": "Gender",
        "controlType":"radioArray",
        "fieldType": "radio",
        "isOptional": true,
        "value":''
      },{
        "hint": "Interests",
        "label": "What about your interests?",
        "order": 4,
        "values": [
          {
            "name": "checkbox1",
            "value": "Hearing Music"
            
          },
          {
            "name": "checkbox2",
            "value": "Sports"
          },
          {
            "name": "checkbox3",
            "value": "Social Activities"
          }
        ],
        "fieldName": "Gender",
        "controlType":"checkboxArray",
        "fieldType": "checkbox",
        "isOptional": false,
        "value":''
      },
      {
        "hint": "State",
        "label": "Select your state",
        "order": 5,
        "values": [
          {
            "value": "Tamilnadu"
          },
          {
            "value": "Kerala"
          },
          {
            "value": "Karnataka"
          }
        ],
        "fieldName": "State",
        "fieldType": "selectbox",
        "controlType":"dropdown",
        "isOptional": true, 
        "value":''
      },
      {
        "hint": "smiley",
        "label": "Select your face",
        "order": 10,
        "values": [
          {
            "value": "sad"
          },
          {
            "value": "good"
          },
          {
            "value": "average"
          }
        ],
        "fieldName": "smiley",
        "fieldType": "smiley_face",
        "controlType":"SmileyScale",
        "isOptional": true, 
        "value":''
      },
      {
        "hint": "starratting",
        "label": "How much you liked it.?",
        "order": 7,
        "values": [
          {
            "value": "1"
          },
          {
            "value": "2"
          },
          {
            "value": "3"
          },
          {
            "value": "4"
          },
          {
            "value": "5"
          }
        ],
        "fieldName": "starratting",
        "fieldType": "starratting",
        "controlType":"starScale",
        "isOptional": true,
        "value":''
      },
      {
        "hint": "datefield",
        "label": "Pick the date ",
        "order": 8,
        "values": [],
        "fieldName": "datefield",
        "fieldType": "date",
        "controlType":"textbox",
        "isOptional": true,
        "value":''
      },{
        "hint": "thumbs",
        "label": "Select Us",
        "order": 10,
        "values": [
        {
          "value":"up"
        },
        {
          "value":"down"
        }
        ],
        "fieldName": "thumbs",
        "fieldType": "thumbs",
        "controlType":"thumbs",
        "isOptional": true,
        "value":''
      }

   ]};
   fields.fields.sort((a, b) => a.order - b.order)
    
    return fields;
  }
}