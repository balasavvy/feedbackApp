import { Component, Input, OnInit }  from '@angular/core';

import { FormGroup} from '@angular/forms'
import { QuestionModel } from '../question-model/question-model';
import { QuestionControlService } from '../question-control-service/question-control-service'

@Component({
  selector:'dynamic-form',
  templateUrl:'/dynamic-form.component.html',
  providers:  [QuestionControlService]
})
export class DynamicForm {
  isLinear = true;
  @Input() title: string;
  @Input() fields: QuestionModel<any>[] = [];
  form: FormGroup;
  payLoad = '';
  activedStep: number = 0;
  showForm:boolean= true;
 
  constructor(private qcs: QuestionControlService) {  }
  prevStep(step) {
    this.activedStep = step - 1;
  }

  nextStep(step) {
    this.activedStep = step + 1;
  }
  ngOnInit() {
    
    this.form = this.qcs.toFormGroup(this.fields);
  }
 
  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
    if (this.form.valid) {
      this.showForm = !this.showForm;
      this.form.reset();
      
    }
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/