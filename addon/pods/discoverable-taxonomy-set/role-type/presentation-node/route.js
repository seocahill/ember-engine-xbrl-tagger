import Ember from 'ember';

export default Ember.Route.extend({
  store: Ember.inject.service(),

  model(params) {
    return this.get('store').findRecord('presentation-node', params.presentation_node_id)
  },

  afterModel(model) {
    if (Ember.isEmpty(model.get('children')) && Ember.isEmpty(model.get('alias.children'))) {
      this.transitionTo('discoverable-taxonomy-set.role-type.presentation-node.element', model.get('element.id'));
    }
  }
});
