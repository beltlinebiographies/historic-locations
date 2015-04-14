import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('landing');
  this.route('other');
  this.resource('exhibits', function () {
    this.route('show', { path: '/:exhibit_id'})
  });
  this.route('map');
});

export default Router;
