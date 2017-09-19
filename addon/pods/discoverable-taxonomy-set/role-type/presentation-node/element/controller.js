import Ember from 'ember';

export default Ember.Controller.extend({
  currentCell: Ember.inject.service(),

  actions: {
    updateTag() {
      const cell = this.get('currentCell.cell');
      const model = this.get('model');
      cell.setProperties({
        settings: model,
        tag: model.get('id')
      });
      if (Ember.isEmpty(cell.get('period'))) {
        cell.set('period', this.get('currentCell.periods.firstObject'));
      }
      cell.save();
    },

    async autoTagCell() {
      const cell = await this.get('currentCell.cell').autoTag();
      this.get('store').pushPayload(cell);
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