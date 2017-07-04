import Ember from 'ember';

export default Ember.Controller.extend({
  currentCell: Ember.inject.service(),
  store: Ember.inject.service(),

  actions: {
    addDimension(node) {
      const cell = this.get('currentCell.cell');
      const hypercubeDimension = this._hypercubeDimension(node);
      const domainMember = node.get('name');
      this.get('store').createRecord('dimension', { cell, hypercubeDimension, domainMember });
      this.transitionToRoute('discoverable-taxonomy-set.role-type.presentation-node');
    }
  },

  _hypercubeDimension(node) {
    const parent = node.get('parent');
    if (parent.get('shortArcrole') === 'hypercube-dimension') {
      return parent.get('name');
    }
    return this._hypercubeDimension(parent);
  }
});