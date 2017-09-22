import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    viewNode(id) {
      this.transitionToRoute('discoverable-taxonomy-set.role-type.presentation-node', id);
    }
  }
});
