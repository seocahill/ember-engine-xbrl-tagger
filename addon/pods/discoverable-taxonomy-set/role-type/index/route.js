import Ember from 'ember';

export default Ember.Route.extend({
  // need to do it here so as only to affect role-type route not role-type/presentation-nodes for e.g.
  beforeModel() {
    this.replaceWith('discoverable-taxonomy-set.role-type.presentation-nodes');
  }
});