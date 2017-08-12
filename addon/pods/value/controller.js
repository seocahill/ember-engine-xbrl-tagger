import Ember from 'ember';

export default Ember.Controller.extend({
  search: false,
  currentCell: Ember.inject.service(),
  value: Ember.computed.alias('currentCell.cell.value'),
  taggedValue: Ember.computed.alias('currentCell.cell.taggedValue'),

  actions: {
    updateCell() {
      const cell = this.get('currentCell.cell');
      cell.save();
    }
  }
});