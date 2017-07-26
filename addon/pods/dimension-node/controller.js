import Ember from 'ember';

export default Ember.Controller.extend({
  currentCell: Ember.inject.service(),
  store: Ember.inject.service(),

  actions: {
    async addDimension(node) {
      const cell = this.get('currentCell.cell');
      const hypercubeDimension = this._hypercubeDimension(node);
      const domainMember = node.get('element.id');
      await this.get('store').createRecord('dimension', { cell, hypercubeDimension, domainMember }).save();
      this.transitionToRoute('dimensions');
    }
  },

  _hypercubeDimension(node) {
    const parent = node.get('parent');
    if (parent.get('shortArcrole') === 'hypercube-dimension') {
      return parent.get('element.id');
    }
    return this._hypercubeDimension(parent);
  }
});