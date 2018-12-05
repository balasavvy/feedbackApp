import { QuestionModel } from "../question-model/question-model";

export class TextboxQuestion extends QuestionModel<string> {
    controlType = 'textbox';
    type: string;
  
    constructor(options: {} = {}) {
      super(options);
      this.type = options['type'] || '';
    }
  }