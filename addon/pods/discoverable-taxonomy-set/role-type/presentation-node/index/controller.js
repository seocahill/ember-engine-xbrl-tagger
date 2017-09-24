import Ember from 'ember';

export default Ember.Controller.extend({
  currentCell: Ember.inject.service(),

  actions: {
    viewNode(id) {
      this.transitionToRoute('discoverable-taxonomy-set.role-type.presentation-node', id);
    },

    pinNode() {
      const currentCell = this.get('currentCell');
      const model = this.get('model');
      currentCell.set('pinnedNode', model);
    }
  }
});
