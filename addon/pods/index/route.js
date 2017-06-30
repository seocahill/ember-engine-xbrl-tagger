import Ember from 'ember';

export default Ember.Route.extend({
  store: Ember.inject.service(),
  model() {
    return this.get('store').findAll('discoverable-taxonomy-set');
  },

  afterModel(model) {
    this.controllerFor('application').set('searchScope', model);
  } 
});
