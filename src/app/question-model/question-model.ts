export class QuestionModel<T> {
    value:T;
  
  label:string;
  isOptional:boolean;
  order:number;
  controlType:string;
  hint:string;
  fieldType:string;
  fieldName:string;
  values:any;
  constructor(options:{
      value?:T,
    
      label?:string,
      isOptional?:boolean,
      order?:number,
      controlType?:string,
      hint?:string,
      fieldType?:string,
      fieldName?:string,
      values?:any;
    } = {}){

    this.value = options.value;
    
    this.label = options.label || '';
    this.isOptional = !!options.isOptional;
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
    this.fieldType = options.controlType || '';
    this.fieldName = options.controlType || '';
    this.hint = options.hint || '';
    this.values = options.values;
  }
}