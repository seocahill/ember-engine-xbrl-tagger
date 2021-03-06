import Ember from 'ember';

export default Ember.Controller.extend({
  currentCell: Ember.inject.service(),
  store: Ember.inject.service(),
  nodes: Ember.computed.alias('model.presentationNodes'),

  actions: {
    append() {
      const { cell } = this.get('currentCell');
      if (Ember.isBlank(cell.get('settings'))) {
        cell.set('settings', { append: true });
      } else {
        cell.set('settings.append', true);
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

    async autoTagCell() {
      const cell = await this.get('currentCell.cell').autoTag();
      this.get('store').pushPayload(cell);
    },

    viewNode(id) {
      this.transitionToRoute('discoverable-taxonomy-set.role-type.presentation-node', id);
    }
  }
});
