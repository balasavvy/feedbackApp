import { QuestionModel } from "../question-model/question-model";


export class dropdownQuestion extends QuestionModel<string>{
    fieldType ="select";
options:{key:string,value:string}[]=[];
constructor(options:{}={}){

    super(options);
    this.options=options['options'] || ''

}
}