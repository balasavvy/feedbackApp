import { Component } from '@angular/core';
import { feedBackServices } from '../feedback-servcies/feedback-question-services';
import { QuestionControlService } from '../question-control-service/question-control-service'
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'feedback-component',
  templateUrl:'/dynamic-form.component-nowizard.html',  
  providers:  [feedBackServices,QuestionControlService]
})
export class NoWizardComponentComponent {
  questions;
  fields:any[]
  showForm:boolean= true;
  constructor(service: feedBackServices,private qcs: QuestionControlService) {
    this.questions = service.getQuestions();
    this.fields =this.questions.fields
  }
   isLinear = true;
   
   formnowizard: FormGroup;
   payLoad = '';
   activedStep: number = 0;
  
   prevStep(step) {
     this.activedStep = step - 1;
   }
 
   nextStep(step) {
     this.activedStep = step + 1;
   }
   ngOnInit() {
     
     this.formnowizard = this.qcs.toFormGroup(this.fields);
   }
  
   onSubmit() {
     this.payLoad = JSON.stringify(this.formnowizard.value);
     if (this.formnowizard.valid) {
      this.showForm = !this.showForm;
      this.formnowizard.reset();
      
    }
   }
  }
  