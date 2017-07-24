import Ember from 'ember';

export default Ember.Route.extend({
  store: Ember.inject.service(),
  model(params) {
    return this.get('store').findRecord('presentation-node', params.presentation_node_id, {
      include: 'element.dimension-nodes'
    })
  },

  afterModel(model) {
    this.controllerFor('application').set('searchScope', model.descendents());
    if (Ember.isEmpty(model.get('children'))) {
      this.replaceWith('discoverable-taxonomy-set.role-type.presentation-node.element', model.get('element'));
    }
  }
});
