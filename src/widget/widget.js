'use strict';

import './widget.css';

import template from './widget.jade';

import Form from '../form/form'

export default class Widget {
  constructor(options) {
    let form = new Form(options.form);
    this.elem = document.createElement('div');
    this.elem.className = 'widget';

    this.elem.innerHTML = template(options);
    this.elem.appendChild(form.elem);
  }
}