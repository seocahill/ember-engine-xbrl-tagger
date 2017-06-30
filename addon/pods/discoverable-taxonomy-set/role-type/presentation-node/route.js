import Ember from 'ember';

export default Ember.Route.extend({
  store: Ember.inject.service(),
  model(params) {
    return this.get('store').findRecord('presentation-node', params.presentation_node_id, {
      include: 'element,element.dimension-nodes'
    })
  },

  afterModel(model) {
    this.controllerFor('application').set('searchScope', model.descendents());
  }
});
