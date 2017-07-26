import Ember from 'ember';

export default Ember.Route.extend({
  store: Ember.inject.service(),
  
  model(params) {
    return this.get('store').findRecord('dimension-node', params.dimension_node_id);
  }
});
