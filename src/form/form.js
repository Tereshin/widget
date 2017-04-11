'use strict';

import './form.css';
import template from './form.jade';

export default class Form {
  constructor(options) {
    this.elem = document.createElement('form');
    this.elem.className = 'form';

    this.elem.innerHTML = template(options);
    $(this.elem).on('submit', function(e) {
      e.preventDefault();
      console.log("submit");
    });
  }
}
