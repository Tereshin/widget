'use strict';

import '../node_modules/jquery-daterangepicker/lib/jquery.daterangepicker.js';
import '../node_modules/jquery-daterangepicker/lib/daterangepicker.css'
import Widget from './widget/widget'

let widget = new Widget({
  title: 'Where does it come from? Why do we use it?',
  desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  form: {
    inputs: [
      {
        placeholder: 'Depart date',
        type: 'text',
        attr: 'from',
        icon: ''
      },
      {
        placeholder: 'Return date',
        type: 'text',
        attr: 'to',
        icon: ''
      }
    ],
    submit: {
      title: 'search',
      type: 'submit'
    }
  }
});

$(document).ready(function(){
  $('body').append(widget.elem);

  let dateRangePickerOptions = {
    language: 'en',
    separator : '',
    getValue: function() {
      if ($('[data-range="from"]').val() && $('[data-range="to"]').val() )
        return $('[data-range="from"]').val() + ' to ' + $('[data-range="to"]').val();
      else
        return '';
    },
    setValue: function(s,s1,s2) {
      $('[data-range="from"]').val(s1);
      $('[data-range="to"]').val(s2);
    }
  }

  $('[data-range="from"]').dateRangePicker(dateRangePickerOptions);
  $('[data-range="to"]').dateRangePicker(dateRangePickerOptions);
});