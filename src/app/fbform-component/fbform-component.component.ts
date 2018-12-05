import { Component, Input, ViewEncapsulation } from '@angular/core';
import { FormGroup }        from '@angular/forms';

import { QuestionModel } from '../question-model/question-model';

@Component({
  selector: 'df-question',
  templateUrl:'/dynamic-form-question.component.html',
  styleUrls:["css/styles.css","css/smiley-face-style.css","css/star-rating-style.css","css/thumbs-styles.css"], 
  encapsulation: ViewEncapsulation.None, 
})
export class DynamicFormQuestionComponent {
  @Input() question: QuestionModel<any>;
  @Input() form: FormGroup;
  @Input() index: number;
  get isValid() { return this.form.controls[this.question.fieldName].valid; }
  
}