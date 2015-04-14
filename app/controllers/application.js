import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    showPage: function (page) {
      this.transitionTo(page);
    }
  }

});
