'use strict';

import Widget from './widget/widget'

let widget = new Widget({
  title: 'Where does it come from? Why do we use it?',
  desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  form: {
    inputs: [
      {
        placeholder: 'Depart date',
        type: 'text',
        icon: ''
      },
      {
        placeholder: 'Return date',
        type: 'text',
        icon: ''
      }
    ],
    submit: {
      title: 'search',
      type: 'submit'
    }
  }
});

window.onload = () => {
  document.body.appendChild(widget.elem);
}