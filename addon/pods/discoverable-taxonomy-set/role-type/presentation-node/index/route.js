import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.modelFor('discoverable-taxonomy-set.role-type.presentation-node');
  },

  setupController(controller, model) {
    this._super(...arguments);
    controller.set('nodes', model.descendants());
  }
});