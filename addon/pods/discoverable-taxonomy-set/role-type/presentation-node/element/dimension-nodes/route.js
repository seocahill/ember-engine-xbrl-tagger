import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.modelFor('discoverable-taxonomy-set.role-type.presentation-node.element')
      .get('dimensionNodes')
      .filter((node) => node.get('arcrole') === "primary-item");
  }
});
