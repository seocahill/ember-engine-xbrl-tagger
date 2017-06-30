import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    const model = this.modelFor('discoverable-taxonomy-set.role-type')
    return model;
  },

  afterModel(model) {
    this.controllerFor('application').set('searchScope', model)
  }
});
