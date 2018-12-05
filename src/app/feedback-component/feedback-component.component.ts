import { Component } from '@angular/core';
import { feedBackServices } from '../feedback-servcies/feedback-question-services';

@Component({
  selector: 'feedback-component',
  template:'<dynamic-form [fields]="questions.fields" [title]="questions.form_header"></dynamic-form>',  
  providers:  [feedBackServices]
})
export class FeedBackComponent {
  questions;

  constructor(service: feedBackServices) {
    this.questions = service.getQuestions();
   console.log(this.questions);
  }
}