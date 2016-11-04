import {bindable} from 'aurelia-framework';

export class Header {

    constructor() {
        this.appTitle = "Aurelia WebApp";
        this.headerText = "Header element";
    }

  @bindable value;

  valueChanged(newValue, oldValue) {

  }
}

