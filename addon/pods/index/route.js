import Ember from 'ember';

export default Ember.Route.extend({
  store: Ember.inject.service(),
  cell: Ember.inject.service('current-cell'),

  beforeModel() {
    const id = this.get('cell.taxonomyId');
    if (id) {
      this.transitionTo('discoverable-taxonomy-set', id);
    }
  },

  model() {
    return this.get('store').findAll('discoverable-taxonomy-set');
  },

  afterModel(model) {
    this.controllerFor('application').set('searchScope', model);
  } 
});
