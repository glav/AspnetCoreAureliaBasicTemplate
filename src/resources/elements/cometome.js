import {bindable} from 'aurelia-framework';

export class ComeToMe {

  @bindable value;

  valueChanged(newValue, oldValue) {

  }

  canDeactivate() {
      return confirm('Dont go! Please stay! Are you really sure you want to leave?');
  }
}

