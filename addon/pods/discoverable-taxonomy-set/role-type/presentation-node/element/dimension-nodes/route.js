import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.modelFor('discoverable-taxonomy-set.role-type.presentation-node.element').get('dimensionNodes');
  },

  setupController(controller, model) {
    this._super(...arguments);
    controller.set('rootNodes', model.filter((node) => node.get('arcrole') === "primary-item"));
  }
});
