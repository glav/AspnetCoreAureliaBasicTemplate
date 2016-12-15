import {inject} from 'aurelia-framework';
import {customAttribute} from 'aurelia-framework';

@inject(Element)
export class MakeBlueBoldCustomAttribute {
  constructor(element) {
      this.element = element;
      this.element.style.textDecoration = "underline";
      this.element.style.color = "blue";
      this.element.style.fontWeight = "bold";
  }

  valueChanged(newValue, oldValue) {

  }
}

