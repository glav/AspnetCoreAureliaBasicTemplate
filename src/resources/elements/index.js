import {bindable} from 'aurelia-framework';

export class Index {
  @bindable value;

  constructor() {
      this.message = "This is a very simple template using Aurelia within an ASP.Net core application. It's purpose is simply to provide a small example and starting point when integrating ASP.Net core and Aurelia.";
  }

  valueChanged(newValue, oldValue) {

  }
}

