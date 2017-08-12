import Ember from 'ember';

const { computed } = Ember;

export default Ember.Controller.extend({
  currentCell: Ember.inject.service(),

  rootNodes: computed.filter('model.presentationNodes', function (node) {
    return node.belongsTo('parent').value() === null;
  }),

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
    }
  }
});
