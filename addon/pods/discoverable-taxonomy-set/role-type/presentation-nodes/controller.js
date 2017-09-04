import Ember from 'ember';

export default Ember.Controller.extend({
  currentCell: Ember.inject.service(),
  nodes: Ember.computed.alias('model.presentationNodes'),

  actions: {
    append() {
      const { cell, cell: { settings } } = this.get('currentCell');
      if (settings) {
        settings.set('append', true);
      } else {
        cell.set('settings', { append: true });
      }
      cell.save();
    },

    remove() {
      const cell = this.get('currentCell.cell');
      cell.setProperties({
        settings: null,
        period: null,
        tag: null,
        dimensions: [],
      });
      cell.save();
    },

    viewNode(id) {
      this.transitionToRoute('discoverable-taxonomy-set.role-type.presentation-node', id);
    }
  }
});
