// context checked: {Boolean}, onChecked: {Function}
import { $ } from 'meteor/jquery';

Template.iCheck.onRendered(function () {
  this.checkbox = $(this.firstNode);

  this.autorun(() => {
    this.checkbox
      .iCheck({
        checkboxClass: 'icheckbox_square-green'
      });
  });
});


Template.iCheck.helpers({
  checkboxAttr() {
    return this.checked ? { checked: true } : {};
  }
});


Template.iCheck.events({
  'ifToggled input': function (event, tmpl) {
    let onChecked = tmpl.data.onChecked;

    if (typeof onChecked === 'function') {
      onChecked(event.target.checked);
    }
  }
});


Template.iCheck.onDestroyed(function () {
  if (this.checkbox) {
    this.checkbox.iCheck('destroy');
  }
});
