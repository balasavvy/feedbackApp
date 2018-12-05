import { Injectable }   from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { QuestionModel } from '../question-model/question-model';

@Injectable()
export class QuestionControlService {
  constructor() { }

  toFormGroup(questions: QuestionModel<any>[] ) {
    let group: any = {};

    questions.forEach(question => {
     
                                              if(question.isOptional && question.fieldType != 'radio' && question.fieldType != 'checkbox'){
                                                console.log("question1")
                                                group[question.fieldName] = new FormControl(question.value || '', Validators.required)
                                              }else if(question.fieldType == 'radio' ){
                                                
                                                group[question.values[0].name] = new FormControl(question.values[0].value|| '', Validators.required) ;
                                               

                                              }else if(question.fieldType == 'checkbox'){
                                                question.values.forEach(checkboxarr => {
                                                 
                                                group[checkboxarr.name] = new FormControl(checkboxarr.value || '', Validators.required) ;  
                                              });
                                              }else if(question.fieldType == 'smiley_face'){
                                                console.log("smiley_face")
                                               
                                                // console.log(question.values[0].value);
                                                group[question.fieldName] = new FormControl(question.values[0].value || '', Validators.required) ;  
                                           
                                              }else{

                                                group[question.fieldName] = new FormControl(question.value || '')

                                              }
                                           
    });
    return new FormGroup(group);
  }
}