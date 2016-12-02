import {bindable} from 'aurelia-framework';

export class Header {

    constructor() {
        this.appTitle = "Aurelia WebApp";
    }

  @bindable value;

  valueChanged(newValue, oldValue) {

  }
}

