import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    goToExhibit: function (exhibit_id) {
      this.transitionTo('exhibits.show', exhibit_id);
    }
  }

});
