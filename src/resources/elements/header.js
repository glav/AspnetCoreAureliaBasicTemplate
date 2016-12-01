import {bindable} from 'aurelia-framework';

export class Header {

    constructor() {
        this.appTitle = "Aurelia WebApp";
        this.headerText = "Welcome to the Aurelia framework integrated into an ASP.Net Core template.";
    }

  @bindable value;

  valueChanged(newValue, oldValue) {

  }
}

