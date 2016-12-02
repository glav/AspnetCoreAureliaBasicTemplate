import {bindable} from 'aurelia-framework';

export class Header {

    constructor() {
        this.appTitle = "Aurelia WebApp";
        this.headerText = "Click the links above to view more content.";
    }

  @bindable value;

  valueChanged(newValue, oldValue) {

  }
}

