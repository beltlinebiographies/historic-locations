import Ember from "ember";

export default Ember.Route.extend({

  setupController: function (controller) {
    var model = this.store.find('exhibit');
    controller.set('exhibits', model);
  }
});
