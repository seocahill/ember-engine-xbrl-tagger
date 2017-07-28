import Ember from 'ember';

export default Ember.Controller.extend({
  currentCell: Ember.inject.service(),
  store: Ember.inject.service(),
  taxonomy: Ember.computed('currentCell.taxonomyId', function () {
    return this.get('store').peekRecord('discoverable-taxonomy-set', this.get('currentCell.taxonomyId'));
  }),

  actions: {
    async addDimension(node) {
      const cell = this.get('currentCell.cell');
      const hypercubeDimension = this._hypercubeDimension(node);
      const domainMember = node.get('tag');
      const taxonomyName = this.get('taxonomy.name');
      await this.get('store').createRecord('dimension', { cell, taxonomyName, hypercubeDimension, domainMember }).save();
      this.transitionToRoute('dimensions');
    }
  },

  _hypercubeDimension(node) {
    const parent = node.get('parent');
    if (parent.get('shortArcrole') === 'hypercube-dimension') {
      return parent.get('tag');
    }
    return this._hypercubeDimension(parent);
  }
});