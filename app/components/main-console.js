import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['main-console'],

  onMap: function () {
    return this.get('currentPath').split('.').indexOf('map') > 0;
  }.property('currentPath'),

  onExhibits: function () {
    return this.get('currentPath').split('.').indexOf('exhibits') > 0;
  }.property('currentPath'),

  actions: {
    showPage: function (page) {
      this.sendAction('showPage', page);
    }
  }

});
